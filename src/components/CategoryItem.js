import useHover from "../hooks/hover";
import CategoryImg from "./cat-2.jpg";

const CategoryItem = ({ category }) => {
  const { handleHover, hoverClass } = useHover("scale-125 skew-y-3");

  return (
    <div
      className="max-w-xs bg-white flex gap-x-6 item__shadow hover:bg-sunGlow"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="overflow-hidden">
        <img
          src={category.image}
          alt="category"
          className={`w-28 h-28 object-cover transition duration-500 ${hoverClass}`}
        />
      </div>
      <div className="flex flex-col justify-center gap-y-3">
        <span className="font-semibold text-marko leading-5">
          {category.name}
        </span>
        <span className="text-paleSky text-sm">100 products</span>
      </div>
    </div>
  );
};

export default CategoryItem;
