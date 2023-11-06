import { useState } from "react";

const useHover = (classes) => {
  const [hoverState, setHoverState] = useState(false);

  const handleHover = () => {
    setHoverState((currentState) => !currentState);
  };

  const hoverClass = hoverState && classes;

  return { handleHover, hoverClass };
};

export default useHover;
