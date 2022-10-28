import AuthBlock from "../../components/UI/Authblock";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

export default function NewUser(props) {
  const [isInputValid, setIsInputValid] = useState(true);
  const [initialUserState, setInitialUserState] = useState("");
  const inputRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const getUsername = async () => {
      const session = await getSession();
      setInitialUserState(session.user);
      inputRef.current.value = session.user.name;
    };
    getUsername();
  }, []);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredUsername = inputRef.current.value.trim();
    if (
      enteredUsername === "" ||
      enteredUsername.length < 3 ||
      enteredUsername.length > 25
    ) {
      setIsInputValid(false);
    } else if (initialUserState.name === enteredUsername) {
      console.log("OK nothing changed", enteredUsername);
      router.push("/");
    } else {
      console.log("OK send req", enteredUsername);
      const response = await fetch("/api/user/update-username", {
        method: "POST",
        body: JSON.stringify({
          email: initialUserState.email,
          name: enteredUsername,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        router.push("/");
      } else {
        throw new Error("Fetching data error");
      }
      router.push("/");
    }
  };

  const inputOnChangeHandler = () => {
    if (!isInputValid) setIsInputValid(true);
  };

  return (
    <AuthBlock>
      <h3>Enter Username</h3>
      <p>Your username will be displayed in the rank table.</p>

      <form onSubmit={formSubmitHandler}>
        <input
          className={isInputValid ? "" : "invalid-input"}
          type="text"
          name="username"
          ref={inputRef}
          onChange={inputOnChangeHandler}
        />
        <button type="submit">Save Username</button>
      </form>
      {!isInputValid && (
        <p className="error-message">
          Username must be longer than 3 characters and shorter than 25
        </p>
      )}
    </AuthBlock>
  );
}
