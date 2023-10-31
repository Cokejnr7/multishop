import classNames from "classnames";

const Container = ({ children, className }) => {
  const classes = classNames("container mx-auto", className);
  return <div className={classes}>{children}</div>;
};

export default Container;
