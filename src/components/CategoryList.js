import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryItem from "./CategoryItem";
import Heading from "./Heading";

const CategoryList = () => {
  const [categories, setCategories] = useState([1, 2, 3, 4, 5, 6]);

  const renderedCategories = categories.map((category) => {
    return (
      <React.Fragment>
        <CategoryItem />
      </React.Fragment>
    );
  });

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
      <div className="__list">{renderedCategories}</div>
    </div>
  );
};

export default CategoryList;
