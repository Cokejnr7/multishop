import CategoryImg from "./cat-2.jpg";

const CategoryItem = () => {
  return (
    <div className="max-w-xs bg-white flex gap-x-2 item__shadow ">
      <div>
        <img src={CategoryImg} alt="" className="w-24 h-full" />
      </div>
      <div className="flex flex-col gap-y-2 justify-center">
        <span className="font-semibold text-marko">Category Name</span>
        <span className="text-sm text-paleSky">100 products</span>
      </div>
    </div>
  );
};

export default CategoryItem;
