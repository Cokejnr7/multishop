import Container from "./Container";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div className="py-4 bg-marko lg:bg-white">
      <Container className="flex justify-between items-center">
        {/* logo */}
        <div>
          <span className="text-marko lg:text-sunGlow bg-white lg:bg-marko text-4xl font-bold px-2 py-1">
            MULTI
          </span>
          <span className="text-white lg:text-marko bg-sunGlow  text-4xl font-bold px-2 py-1">
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
  );
};

export default Search;
