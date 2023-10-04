import React from "react";

import "./ProductList.scss";
import { ICar } from "@/app/utils/types";
import Product from "./ProductCard/Product";
import { mockCars } from "@/app/utils/mocks";

interface IProductList {}

const ProductList: React.FC<IProductList> = () => {
  const cars: ICar[] = mockCars;

  return (
    <div className="ProductList">
      {cars.map((car) => (
        <Product product={car} />
      ))}
    </div>
  );
};

export default ProductList;
