import classes from "./ForecastResult.module.css";

const ForecastResult = (props) => {
  return (
    <>
      <div className={classes.forecast}>
        <div className={classes.home}>
          <p>{props.home === null ? "-" : props.home}</p>
        </div>
        <div>
          <p>:</p>
        </div>
        <div className={classes.guest}>
          <p>{props.guest === null ? "-" : props.guest}</p>
        </div>
        <div
          className={`${classes.pts} ${props.pts > 0 ? classes.win : ""} ${
            props.pts < 0 ? classes.lose : ""
          }`}
        >
          <p>{props.pts === null ? "-" : props.pts}</p>
        </div>
      </div>
    </>
  );
};

export default ForecastResult;
