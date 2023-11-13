import { useState, useEffect } from "react";
import axios from "axios";
import CategoryItem from "./CategoryItem";
import Heading from "./Heading";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = axios.get(`/api/store/categories`);
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="flex flex-col gap-y-6">
      s
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
