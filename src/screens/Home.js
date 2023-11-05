import Container from "../components/Container";
import ProductItem from "../components/ProductItem";
import CategoryItem from "../components/CategoryItem";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <main>
      <Container className="pt-6 pb-24 flex flex-col gap-y-24">
        <CategoryItem />
        <ProductList headerName="FEATURED PRODUCTS" />
        <ProductList headerName="RECENT PRODUCTS" />
      </Container>
    </main>
  );
};

export default Home;
