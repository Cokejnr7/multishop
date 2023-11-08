import { useState, useEffect, useRef } from "react";

const useClick = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef();

  const handleClick = (e) => {
    if (ref.current.contains(e.target)) {
      setIsExpanded((currentVal) => !currentVal);
    } else {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return { ref, isExpanded };
};

export default useClick;
