import classes from "./Login.module.css";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <section className={classes.login}>
      <form>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button className={classes.submit} type="submit">
          LOGIN
        </button>
      </form>
      <button className={classes.registration} type="button">
        registration
      </button>
      <div>
        <a
          href={`/api/auth/signin`}
          // className={styles.buttonPrimary}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign in
        </a>
      </div>
    </section>
  );
};

export default Login;
