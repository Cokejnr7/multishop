import Navbar from "./Navbar";
import Search from "./Search";
import { useState, useEffect, useRef } from "react";
import Container from "./Container";
import { GoTriangleDown } from "react-icons/go";

const Header = () => {
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

  return (
    <div>
      <div className="bg-wildSand py-1">
        <Container className="flex items-center justify-center lg:justify-between">
          <ul className="lg:flex gap-x-3 hidden">
            <li className="text-paleSky">About</li>
            <li className="text-paleSky">Contact</li>
            <li className="text-paleSky">Help</li>
            <li className="text-paleSky">FAQs</li>
          </ul>
          <div
            className="bg-white px-2 py-1  hover:bg-hGallery cursor-pointer relative"
            ref={ref}
          >
            <div className="flex items-center gap-x-1">
              <span className="text-sm">My Account </span>
              <GoTriangleDown />
            </div>
            <div
              className={`absolute top-[100%] ${
                isExpanded ? "flex flex-col" : "hidden"
              } border border-wildSand px-6 py-3  bg-white right-0 w-[150%]`}
            >
              <span>Sign in</span>
              <span>Sign up</span>
            </div>
          </div>
        </Container>
      </div>
      <Search />
      <Navbar />
    </div>
  );
};

export default Header;
