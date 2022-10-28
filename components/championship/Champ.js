import ChampMatches from "./matchBlock/ChampMatches";
import ChampStatistic from "./statisticBlock/ChampStatistic";

import classes from "./Champ.module.css";

const Champ = () => {
  return (
    <div className={classes.champ}>
      <h3 className={classes.header}>FIFA WORL CUP 2022</h3>
      <div className={classes.content}>
        <ChampMatches />
        <ChampStatistic />
      </div>
    </div>
  );
};

export default Champ;
