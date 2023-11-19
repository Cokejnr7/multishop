import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  const fetchRecentProducts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/store/products/recent_products/"
      );
      console.log(response.data);
      setPopularProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecentProducts();
  }, []);

  return (
    <ProductList products={popularProducts} headerName={"POPULAR PRODUCTS"} />
  );
};

export default PopularProducts;
