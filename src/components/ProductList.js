import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center gap-x-6">
        <h2 className="text-3xl font-bold text-marko sub__heading">
          FEATURED PRODUCTS
        </h2>
        <span className="border-b-2 h-1 grow border-dashed "></span>
      </div>
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
