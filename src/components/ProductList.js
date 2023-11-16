import React from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";

const ProductList = ({ headerName, products }) => {
  const renderedProducts = products.map((product, index) => {
    return (
      <React.Fragment key={index}>
        <ProductItem />
      </React.Fragment>
    );
  });

  return (
    <div className="flex flex-col gap-y-6">
      {headerName && <Heading name={headerName} />}

      <div className="__list">{renderedProducts}</div>
    </div>
  );
};

export default ProductList;
