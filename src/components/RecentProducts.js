import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import axios from "axios";

const RecentProducts = () => {
  const [recentProducts, setRecentProducts] = useState([]);

  const fetchRecentProducts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/store/products/recent_products/"
      );
      console.log(response.data);
      setRecentProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecentProducts();
  }, []);

  return (
    <ProductList headerName={"RECENT PRODUCTS"} products={recentProducts} />
  );
};

export default RecentProducts;
