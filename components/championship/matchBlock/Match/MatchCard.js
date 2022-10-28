import classes from "./MatchCard.module.css";

import MatchInfo from "./MatchInfo";
import ForecastForm from "./ForecastForm";
import ForecastResult from "./ForecastResult";

const MatchCard = (props) => {
  const status = props.match.status;
  const forecast = props.match.forecast;
  const matchInfo = props.match.info;

  let forecastContent = <p>Error</p>;

  if (
    (forecast.home === null || forecast.guest === null) &&
    !status.isFinished &&
    !status.isLive
  ) {
    forecastContent = <ForecastForm id={props.id} />;
  } else {
    forecastContent = (
      <ForecastResult
        home={forecast.home}
        guest={forecast.guest}
        pts={forecast.pts}
      />
    );
  }

  return (
    <li className={classes.card}>
      <MatchInfo
        startTime={matchInfo.startTime}
        home={matchInfo.home}
        guest={matchInfo.guest}
        homeScore={matchInfo.homeScore}
        guestScore={matchInfo.guestScore}
      />
      {forecastContent}
    </li>
  );
};

export default MatchCard;
