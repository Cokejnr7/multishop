import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryItem from "./CategoryItem";
import Heading from "./Heading";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const renderedCategories = categories.map((category) => {
    return (
      <React.Fragment key={category.id}>
        <CategoryItem category={category} />
      </React.Fragment>
    );
  });

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/store/categories`
      );
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col gap-y-6">
      <Heading>CATEGORIES</Heading>
      <div className="__list">{renderedCategories}</div>
    </div>
  );
};

export default CategoryList;
