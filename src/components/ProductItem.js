import ProductImg from "./product-2.jpg";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const ProductItem = () => {
  return (
    <div className="bg-white max-w-xs product__item ">
      <div className="overflow-hidden">
        <img
          src={ProductImg}
          alt="product"
          className="hover:scale-125 transition duration-300 hover:opacity-50 "
        />
      </div>
      <div className="flex flex-col gap-y-2 items-center py-6">
        <span className="text-marko">Product Name Goes Here</span>
        <span className="text-marko">$123.00</span>
        <span className="flex items-center gap-x-1">
          <ul className="flex">
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
              <FaStar className="text-sunGlow" />
            </li>
          </ul>
          <span className="text-paleSky">()</span>
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
