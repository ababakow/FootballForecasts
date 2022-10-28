import ContentBlock from "../../UI/ContentBlock";
import classes from "./ChampMatches.module.css";
import MatchesList from "./MathesList";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const date = new Date();
const round = "Round 3";

const ChampMatches = () => {
  const matches = [
    {
      id: "111",
      info: {
        home: "Before",
        guest: "no Forecast",
        startTime: new Date(),
        homeScore: null,
        guestScore: null,
      },
      forecast: {
        home: null,
        guest: null,
        pts: null,
      },
      status: {
        isFinished: false,
        isLive: false,
      },
    },
    {
      id: "2",
      info: {
        home: "Before",
        guest: "Forecust",
        startTime: new Date(),
        homeScore: 1,
        guestScore: 0,
      },
      forecast: {
        home: 2,
        guest: 4,
        pts: null,
      },
      status: {
        isFinished: false,
        isLive: true,
      },
    },
    {
      id: "3",
      info: {
        home: "After",
        guest: "no Forecust",
        startTime: new Date(),
        homeScore: 0,
        guestScore: 10,
      },
      forecast: {
        home: null,
        guest: null,
        pts: 0,
      },
      status: {
        isFinished: false,
        isLive: true,
      },
    },
    {
      id: "4",
      info: {
        home: "After",
        guest: "Forecust",
        startTime: new Date(),
        homeScore: 3,
        guestScore: 2,
      },
      forecast: {
        home: 3,
        guest: 2,
        pts: 12,
      },
      status: {
        isFinished: true,
        isLive: true,
      },
    },
    {
      id: "5",
      info: {
        home: "Live",
        guest: "no Forecust",
        startTime: new Date(),
        homeScore: 0,
        guestScore: 10,
      },
      forecast: {
        home: null,
        guest: null,
        pts: 0,
      },
      status: {
        isFinished: false,
        isLive: true,
      },
    },
    {
      id: "6",
      info: {
        home: "Live",
        guest: "Forecust",
        startTime: new Date(),
        homeScore: 0,
        guestScore: 0,
      },
      forecast: {
        home: 1,
        guest: 10,
        pts: -10,
      },
      status: {
        isFinished: false,
        isLive: true,
      },
    },
  ];

  return (
    <ContentBlock>
      <header className={classes["matchlist-header"]}>
        <div title="Previous" color="">
          <BiChevronLeft className={classes.nav} size="1.5rem" />
        </div>
        <h5>{`${date.toLocaleDateString()} - ${round}`}</h5>
        <div title="Next">
          <BiChevronRight className={classes.nav} size="1.5rem" />
        </div>
      </header>
      <MatchesList matchList={matches} />
    </ContentBlock>
  );
};

export default ChampMatches;
