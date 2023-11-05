import ProductItem from "./ProductItem";
import Heading from "./Heading";

const ProductList = ({ headerName }) => {
  return (
    <div className="flex flex-col gap-y-6">
      {headerName && <Heading name={headerName} />}
      <div className="product__list">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductList;
