import classes from "./StatisticPlayer.module.css";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const StatisticPlayer = (props) => {
  let placeChange = -(props.playerData.place - props.playerData.prevPlace);
  let placeChangeClass = classes["place-change"];
  if (placeChange === 0) {
    placeChange = String(placeChange);
  } else if (placeChange > 0) {
    placeChange = (
      <>
        {`+${placeChange}`} <AiFillCaretUp color="green" />
      </>
    );
    placeChangeClass += ` ${classes.increase}`;
  } else {
    placeChange = (
      <>
        {String(placeChange)} <AiFillCaretDown color="red" />
      </>
    );
    placeChangeClass += ` ${classes.decrease}`;
  }

  let scoreChange = props.playerData.score - props.playerData.prevScore;
  let scoreChangeClass = classes["score-change"];
  if (scoreChange === 0) {
    scoreChange = String(scoreChange);
  } else if (scoreChange > 0) {
    scoreChange = `(+${scoreChange})`;
    scoreChangeClass += ` ${classes.increase}`;
  } else {
    scoreChange = `(${String(scoreChange)})`;
    scoreChangeClass += ` ${classes.decrease}`;
  }

  return (
    <tr
      className={
        props.playerData.username === "ababakov"
          ? classes["user-row"]
          : classes.row
      }
    >
      <td className={classes.place}>{props.playerData.place}</td>
      <td className={placeChangeClass}>{placeChange}</td>
      <td className={classes.username}>{props.playerData.username}</td>
      <td className={classes.score}>{props.playerData.score}</td>
      <td className={scoreChangeClass}>{scoreChange}</td>
    </tr>
  );
};

export default StatisticPlayer;
