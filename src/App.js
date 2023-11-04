import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Route from "./components/Route";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Footer />
    </div>
  );
};

export default App;
