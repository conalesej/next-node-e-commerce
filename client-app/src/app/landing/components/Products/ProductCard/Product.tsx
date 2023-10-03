import React from "react";
import "./Product.scss";
import { ICar } from "@/app/utils/types";

interface IProduct {
  product: ICar;
}
const Product: React.FC<IProduct> = ({ product }) => {
  return (
    <div className="Product">
      <div className="image">
        <img
          src="https://source.unsplash.com/random/?Cars&1"
          alt="https://unsplash.it"
          className="image-holder"
        />
      </div>
      <div className="description"></div>
    </div>
  );
};

export default Product;
