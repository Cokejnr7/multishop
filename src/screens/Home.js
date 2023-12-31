import Container from "../components/Container";
import CategoryList from "../components/CategoryList";
import RecentProducts from "../components/RecentProducts";
import PopularProducts from "../components/PopularProducts";
import ServiceList from "../components/ServiceList";

const Home = () => {
  return (
    <main>
      <Container className="pt-8 pb-24 flex flex-col gap-y-24">
        <ServiceList />
        <CategoryList />
        <PopularProducts />
        <RecentProducts />
      </Container>
    </main>
  );
};

export default Home;
