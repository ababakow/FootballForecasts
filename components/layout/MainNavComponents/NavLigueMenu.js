import classes from "./NavLigueMenu.module.css";

import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const LIGUES = [
  { title: "Some Ligue", id: "l1" },
  { title: "Super Cool Gays", id: "l2" },
  { title: "Win only one", id: "l3" },
  { title: "Palyanyca", id: "l4" },
  { title: "nemr dsfsd  eddvvmfnjknj", id: "l5" },
  { title: "Пацани вообще ребята", id: "l6" },
];

const NavLigueMenu = (props) => {
  const ligueList = LIGUES.filter(
    (ligue) => ligue.title !== props.currentLigue
  ).map((ligue) => <li key={ligue.id}>{ligue.title}</li>);

  return (
    <ul className={classes["ligue-menu"]}>
      <li>
        {props.currentLigue}
        <span>
          <FiChevronDown color={"rgb(196, 196, 196)"} />
        </span>
      </li>
      <ul className={classes["ligue-list"]}>
        {ligueList}
        <li>
          <Link href="/ligues/new">ADD NEW LIGUE</Link>
        </li>
      </ul>
    </ul>
  );
};

export default NavLigueMenu;
