import classes from "./MatchInfo.module.css";

const MatchInfo = (props) => {
  return (
    <>
      <div>
        <p>{String(props.startTime).slice(15, 21)}</p>
      </div>
      <div className={classes.match}>
        <div className={classes.home}>
          <p>{props.home}</p>
        </div>
        <div className={classes.homeScore}>
          <p>{props.homeScore !== null ? props.homeScore : "-"}</p>
        </div>
        <div>
          <p>:</p>
        </div>
        <div className={classes.guestScore}>
          <p>{props.guestScore !== null ? props.guestScore : "-"}</p>
        </div>
        <div className={classes.guest}>
          <p>{props.guest}</p>
        </div>
      </div>
    </>
  );
};

export default MatchInfo;
