import MainNavigation from "./MainNavigation";
import classes from "./LayoutAllPages.module.css";

// import { useSession } from "next-auth/react";

const LayoutAllPages = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default LayoutAllPages;
