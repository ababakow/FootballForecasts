import classes from "./ForecastForm.module.css";

const ForecastForm = (props) => {
  return (
    <>
      <form className={classes.forecast}>
        <input
          className={classes.score}
          type="number"
          min="0"
          max="50"
          step="1"
          name={`${props.id}-home`}
          placeholder="home"
        />
        <div>
          <p>:</p>
        </div>
        <input
          className={classes.score}
          type="number"
          min="0"
          max="50"
          step="1"
          name={`${props.id}-guest`}
          placeholder="guest"
        />
        <button type="submit" className={classes.button}>
          Save
        </button>
      </form>
    </>
  );
};

export default ForecastForm;
