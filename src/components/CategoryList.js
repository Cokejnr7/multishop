import CategoryItem from "./CategoryItem";
import Heading from "./Heading";

const CategoryList = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <Heading name="Categories" />
      <div className="__list">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
};

export default CategoryList;
