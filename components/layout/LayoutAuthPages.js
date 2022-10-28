import classes from "./LayoutAuthPages.module.css";

const LayoutAuthPages = (props) => {
  return (
    <>
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default LayoutAuthPages;
