import React from "react";
import "./Product.scss";

import { ICar } from "@/app/utils/types";

import SpeedIcon from "@mui/icons-material/Speed";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { formatNumberWithCommas } from "@/app/utils/util";
interface IProduct {
  product: ICar;
}
const Product: React.FC<IProduct> = ({ product }) => {

  return (
    <div className="Product">
      <div className="image">
        <img
          src={`https://source.unsplash.com/random/?car&${product.car_id}`}
          alt="https://unsplash.it"
          className="image-holder"
        />
        <div className="body-type">{product.body_type}</div>
      </div>
      <div className="description">
        <div className="desc-header">
          <span>{product.year}</span>
          {" • "}
          <span>{product.fuel_type}</span>
          {" • "}
          <span>{product.transmission}</span>
        </div>
        <div className="desc-make-model">
          {product.make + " " + product.model}
        </div>
        <div className="desc-mileage">
          <SpeedIcon htmlColor="gray" style={{ marginRight: 5 }} />
          {product.mileage + " KM"}
        </div>
        <div className="desc-price">
          <MonetizationOnOutlinedIcon
            htmlColor="orange"
            style={{ marginRight: 5 }}
          />
          {formatNumberWithCommas(product.price)}
        </div>
      </div>
    </div>
  );
};

export default Product;
