import React from "react";
import "./Product.scss"
import { ICar } from "@/app/utils/types";

interface IProduct {
  product: ICar;
}
const Product: React.FC<IProduct> = ({ product }) => {
  return <div className="Product">{product.make}</div>;
};

export default Product;
