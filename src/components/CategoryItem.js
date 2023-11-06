import useHover from "../hooks/hover";
import CategoryImg from "./cat-2.jpg";

const CategoryItem = () => {
  const { handleHover, hoverClass } = useHover("scale-125 skew-y-3");

  return (
    <div
      className="max-w-xs bg-white flex gap-x-2 item__shadow hover:bg-sunGlow"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="overflow-hidden">
        <img
          src={CategoryImg}
          alt="category"
          className={`w-28 h-full transition duration-500 ${hoverClass}`}
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-semibold text-marko text-lg">Category Name</span>
        <span className="text-paleSky">100 products</span>
      </div>
    </div>
  );
};

export default CategoryItem;
