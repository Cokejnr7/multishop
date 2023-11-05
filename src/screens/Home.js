import Container from "../components/Container";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import ServiceList from "../components/ServiceList";

const Home = () => {
  return (
    <main>
      <Container className="pt-8 pb-24 flex flex-col gap-y-24">
        <ServiceList />
        <CategoryList />
        <ProductList headerName="FEATURED PRODUCTS" />
        <ProductList headerName="RECENT PRODUCTS" />
      </Container>
    </main>
  );
};

export default Home;
