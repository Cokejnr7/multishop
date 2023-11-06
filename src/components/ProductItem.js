import useHover from "../hooks/hover";
import ProductImg from "./product-2.jpg";
import { FaStarHalf, FaStar } from "react-icons/fa6";

const ProductItem = () => {
  const { handleHover, hoverClass } = useHover("opacity-50 scale-125");

  return (
    <div
      className="bg-white item__shadow "
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="overflow-hidden">
        <img
          src={ProductImg}
          alt="product"
          className={`transition duration-500 ${hoverClass}`}
        />
      </div>
      <div className="flex flex-col gap-y-2 items-center py-6">
        <span className="text-marko font-semibold">Product Name Goes Here</span>
        <span className="flex items-center gap-x-2">
          <span className="text-marko text-xl font-semibold">$123.00</span>
          <s className="text-paleSky text-sm font-semibold">$150.00</s>
        </span>
        <span className="flex items-center gap-x-1">
          <ul className="flex gap-x-1">
            <li>
              <FaStar className="text-sunGlow" />
            </li>
            <li>
              <FaStar className="text-sunGlow" />
            </li>
            <li>
              <FaStar className="text-sunGlow" />
            </li>
            <li>
              <FaStar className="text-sunGlow" />
            </li>
            <li>
              <FaStarHalf className="text-sunGlow" />
            </li>
          </ul>
          <span className="text-paleSky text-sm">(90)</span>
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
