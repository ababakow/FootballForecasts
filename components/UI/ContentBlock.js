import classes from "./ContentBlock.module.css";

const ContentBlock = (props) => {
  return (
    <section className={`${classes.section} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default ContentBlock;
