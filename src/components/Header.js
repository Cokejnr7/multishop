import Navbar from "./Navbar";
import Search from "./Search";
import useClick from "../hooks/click";
import Container from "./Container";
import { GoTriangleDown } from "react-icons/go";
import Link from "./Link";

const Header = () => {
  const { ref, isExpanded } = useClick();
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
              } border border-wildSand bg-white right-0 w-[150%] `}
            >
              <Link
                to="/account/login"
                className="hover:bg-hGallery px-6 py-1 "
              >
                Sign in
              </Link>
              <Link
                to="/account/register"
                className="hover:bg-hGallery px-6 py-1"
              >
                Sign up
              </Link>
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
