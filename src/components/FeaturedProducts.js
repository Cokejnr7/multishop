import ProductList from "./ProductList";

const FeaturedProducts = () => {
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

  return <ProductList headerName={"FEATURED PRODUCTS"} />;
};

export default FeaturedProducts;
