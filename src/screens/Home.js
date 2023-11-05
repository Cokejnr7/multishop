import Container from "../components/Container";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <main>
      <Container className="pt-6 pb-24 flex flex-col gap-y-24">
        <CategoryList />
        <ProductList headerName="FEATURED PRODUCTS" />
        <ProductList headerName="RECENT PRODUCTS" />
      </Container>
    </main>
  );
};

export default Home;
