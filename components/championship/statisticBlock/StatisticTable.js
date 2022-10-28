import StatisticPlayer from "./StatisticPlayer";
import classes from "./StatisticTable.module.css";

const StatisticTable = (props) => {
  const players = props.ligueData
    .sort((a, b) => a.place - b.place)
    .map((player) => <StatisticPlayer key={player.id} playerData={player} />);

  return (
    <div className={classes["table-block"]}>
      <table>
        <tbody>{players}</tbody>
      </table>
    </div>
  );
};

export default StatisticTable;
