import Container from "./Container";
import useClick from "../hooks/click";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoListUnordered } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import Link from "./Link";

const Navbar = () => {
  const { ref, isExpanded } = useClick();

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
            <RiArrowDownSLine className="text-lg text-marko" />
          </div>
          <ul className="flex items-center gap-x-4">
            <li className="text-wildSand hover:text-sunGlow cursor-pointer">
              <Link to="/" activeLink>
                Home
              </Link>
            </li>
            <li className="text-wildSand hover:text-sunGlow cursor-pointer">
              <Link to="/shop" activeLink>
                Shop
              </Link>
            </li>
            <li
              className="text-wildSand group cursor-pointer flex items-center relative"
              ref={ref}
            >
              <span className="group-hover:text-sunGlow">pages</span>
              <RiArrowDownSLine className="text-white text-lg self-end group-hover:text-sunGlow" />
              <div
                className={`absolute py-1 top-11 bg-sunGlow w-36 ${
                  isExpanded ? "flex flex-col" : "hidden"
                }`}
              >
                <Link
                  to="/cart"
                  className="px-5 py-1 text-black hover:bg-wildSand"
                  activeLink
                >
                  Shopping Cart
                </Link>
                <Link
                  to="/checkout"
                  className="px-5 py-1 text-black hover:bg-wildSand"
                  activeLink
                >
                  Checkout
                </Link>
              </div>
            </li>
            <li className="text-wildSand hover:text-sunGlow cursor-pointer">
              <Link to="/contact" activeLink>
                Contact
              </Link>
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
