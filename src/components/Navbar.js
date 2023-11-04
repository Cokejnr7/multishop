import Container from "./Container";
import { GoChevronDown, GoListUnordered } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import Link from "./Link";

const Navbar = () => {
  return (
    <nav className="bg-marko hidden lg:block">
      <Container className="flex justify-between items-center">
        <div className="flex gap-x-8">
          <div className="bg-sunGlow py-5 px-2 flex items-center gap-x-14 cursor-pointer">
            <div className="flex items-center gap-2">
              <GoListUnordered className="text-lg" />
              <span className="font-semibold text-marko text-lg">
                Categories
              </span>
            </div>
            <GoChevronDown className="text-lg text-marko" />
          </div>
          <ul className="flex items-center gap-x-4">
            <li className="text-wildSand hover:text-sunGlow cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="text-wildSand hover:text-sunGlow cursor-pointer">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="text-wildSand hover:text-sunGlow cursor-pointer">
              pages
            </li>
            <li className="text-wildSand hover:text-sunGlow cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex">
          <div className="flex items-center gap-x-1">
            <FaShoppingCart className="text-sunGlow text-lg" />
            <span className="text-wildSand border cart__num text-xs">0</span>
          </div>
          <div></div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
