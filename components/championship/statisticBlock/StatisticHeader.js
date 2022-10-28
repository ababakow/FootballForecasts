import clases from "./StatisticHeader.module.css";

// import { GiPodium } from "react-icons/gi";

const StatisticHeader = (props) => {
  return (
    <header className={clases["champ-header"]}>
      <h5>{props.ligueName} Ligue</h5>
      {/* <div>
        <p>
          <span>
            <GiPodium size="1.5rem" color="rgb(100, 200, 0)" />
          </span>
          5
        </p>
        <p>{`${10} pts`}</p>
      </div> */}
    </header>
  );
};

export default StatisticHeader;
