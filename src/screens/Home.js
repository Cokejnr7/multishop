import Container from "../components/Container";
import ProductItem from "../components/ProductItem";
import CategoryItem from "../components/CategoryItem";

const Home = () => {
  return (
    <main>
      <Container className="pt-6 pb-24 flex flex-col gap-y-24">
        Home Page
        <div>
          <CategoryItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
      </Container>
    </main>
  );
};

export default Home;
