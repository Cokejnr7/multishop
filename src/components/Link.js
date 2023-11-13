import { useContext } from "react";
import { NavigationContext } from "../context/navigation";
import classNames from "classnames";

const Link = ({ to, children, className, activeLink }) => {
  const { navigate, currentPath } = useContext(NavigationContext);

  const classes = classNames(
    className,
    currentPath === to && activeLink && "text-sunGlow"
  );

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
};

export default Link;
