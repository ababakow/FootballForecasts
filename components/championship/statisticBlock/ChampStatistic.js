import ContentBlock from "../../UI/ContentBlock";
import StatisticHeader from "./StatisticHeader";
import StatisticTable from "./StatisticTable";
// import classes from "./ChampMatches.module.css";

const ChampStatistic = () => {
  const ligueData = [
    {
      id: "p1",
      username: "ababakov",
      score: 32,
      place: 4,
      prevPlace: 4,
      prevScore: 32,
    },
    {
      id: "p2",
      username: "vasyluk",
      score: 3,
      place: 5,
      prevPlace: 4,
      prevScore: 32,
    },
    {
      id: "p3",
      username: "IgarioshA",
      score: 180,
      place: 1,
      prevPlace: 4,
      prevScore: 32,
    },
    {
      id: "p4",
      username: "Tryzzna",
      score: -100,
      place: 9,
      prevPlace: 4,
      prevScore: 32,
    },
    {
      id: "p5",
      username: "Saray",
      score: 0,
      place: 6,
      prevPlace: 4,
      prevScore: 32,
    },
    {
      id: "p6",
      username: "Vait",
      score: 48,
      place: 2,
      prevPlace: 4,
      prevScore: 32,
    },
    {
      id: "p7",
      username: "Voitenko",
      score: -5,
      place: 8,
      prevPlace: 4,
      prevScore: 32,
    },
    {
      id: "p8",
      username: "Vova",
      score: 33,
      place: 3,
      prevPlace: 4,
      prevScore: 32,
    },
    {
      id: "p9",
      username: "Misha",
      score: -45,
      place: 7,
      prevPlace: 4,
      prevScore: 32,
    },
  ];
  const ligueName = "Palyanyca";

  return (
    <ContentBlock>
      <StatisticHeader ligueName={ligueName} />
      <StatisticTable ligueData={ligueData} />
    </ContentBlock>
  );
};

export default ChampStatistic;
