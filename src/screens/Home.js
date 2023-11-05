import Container from "../components/Container";
import ProductItem from "../components/ProductItem";
const Home = () => {
  return (
    <main>
      <Container className="py-6 flex flex-col gap-y-24">
        Home Page
        <div>
          <ProductItem />
        </div>
      </Container>
    </main>
  );
};

export default Home;
