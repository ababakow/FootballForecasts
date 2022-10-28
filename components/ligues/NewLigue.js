import ContentBlock from "../UI/ContentBlock";

import classes from "./NewLigue.module.css";

import { useState } from "react";

const NewLigue = () => {
  const [isLigueCreated, setIsLigueCreated] = useState(false);

  const createLigueHandler = (e) => {
    e.preventDefault();
    setIsLigueCreated(true);
  };

  return (
    <ContentBlock className={classes["new-ligue"]}>
      {!isLigueCreated ? (
        <>
          <h5>Create New Ligue</h5>
          <form onSubmit={createLigueHandler} className={classes.form}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" maxLength="25" />
            <label htmlFor="manage">Who can manage ligue</label>
            <select id="manage">
              <option value="false">Only I</option>
              <option value="true">All participient</option>
            </select>
            <button type="submit">CREATE</button>
          </form>
        </>
      ) : (
        <>
          <h5>Ligue has been created!</h5>
          <p>Shere link below to add new players in your ligue:</p>
          <p>LINK</p>
        </>
      )}
    </ContentBlock>
  );
};

export default NewLigue;
