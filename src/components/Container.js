import classNames from "classnames";

const Container = ({ children, className }) => {
  const classes = classNames("container mx-auto px-2", className);
  return <div className={classes}>{children}</div>;
};

export default Container;
