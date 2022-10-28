import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

import classes from "./MainNavigation.module.css";
import NavLigueMenu from "./MainNavComponents/NavLigueMenu";

const CURRENT_LIGUE = "Palyanyca";

const MainNavigation = () => {
  const router = useRouter();
  return (
    <>
      <header className={classes.header}>
        <nav className={classes["nav-main"]}>
          <ul>
            <li
              className={
                router.pathname === "/championship" ? classes.active : ""
              }
            >
              <Link href="/championship">Championship</Link>
            </li>
            <li
              className={
                router.pathname === "/match-center" ? classes.active : ""
              }
            >
              <Link href="/match-center">Match Center</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.ligue}>
          <NavLigueMenu currentLigue={CURRENT_LIGUE} />
        </div>
        <div className={classes.user}>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </a>
        </div>
      </header>
    </>
  );
};

export default MainNavigation;
