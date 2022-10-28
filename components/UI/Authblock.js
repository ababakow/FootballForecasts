import classes from "./AuthBlock.module.css";

const AuthBlock = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default AuthBlock;
