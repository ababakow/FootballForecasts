import MatchCard from "./Match/MatchCard";

import classes from "./MatchesList.module.css";

const MatchesList = (props) => {
  let content = <p className={classes.hide}>There are no available matches.</p>;

  if (props.matchList && props.matchList.length > 0) {
    content = (
      <ul className={classes.list}>
        {props.matchList.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </ul>
    );
  }

  return <>{content}</>;
};

export default MatchesList;
