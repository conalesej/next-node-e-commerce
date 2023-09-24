import React from "react";
import "./Landing.scss";
import { Carousel, Categories } from "./components";
const page = () => {
  return (
    <div className="Landing">
      <div className="carousel-category-container">
        <div className="carousel-container">
          <Carousel />
        </div>
        <div className="category-container">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default page;
