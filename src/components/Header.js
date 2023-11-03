// import Navbar from "./Navbar";
import Container from "./Container";
import {
  GoTriangleDown,
  GoChevronDown,
  GoListUnordered,
  GoSearch,
} from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
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
          <div className="bg-white px-2 py-1 flex items-center gap-1 hover:bg-hGallery cursor-pointer">
            <span className="text-sm">My Account </span>
            <GoTriangleDown />
          </div>
        </Container>
      </div>

      <div className="py-4 bg-marko lg:bg-white">
        <Container className="flex justify-between items-center">
          {/* logo */}
          <div>
            <span className="text-marko lg:text-sunGlow bg-white lg:bg-marko text-3xl font-bold px-2 py-1">
              MULTI
            </span>
            <span className="text-white lg:text-marko bg-sunGlow  text-3xl font-bold px-2 py-1">
              SHOP
            </span>
          </div>

          {/* search bar */}
          <div className="hidden lg:flex w-1/3 ">
            <input
              type="text"
              className="border border-ghost p-2 grow focus:outline-none focus:border-butterMilk"
              placeholder="Search for products"
            />
            <button className="border border-ghost px-2">
              <GoSearch className="text-sunGlow text-lg font-extrabold" />
            </button>
          </div>

          {/* customer service */}
          <div className="hidden lg:flex flex-col items-center">
            <span className="text-paleSky">Customer Service</span>
            <span className="font-semibold text-xl text-marko">
              +012 345 6789
            </span>
          </div>
        </Container>
      </div>

      {/* navbar */}
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
                Home
              </li>
              <li className="text-wildSand hover:text-sunGlow cursor-pointer">
                Shop
              </li>
              <li className="text-wildSand hover:text-sunGlow cursor-pointer">
                pages
              </li>
              <li className="text-wildSand hover:text-sunGlow cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          <div className="flex">
            <div>
              <FaShoppingCart className="text-sunGlow text-lg" />
            </div>
            <div></div>
          </div>
        </Container>
      </nav>
      {/* <Navbar /> */}
    </div>
  );
};

export default Header;
