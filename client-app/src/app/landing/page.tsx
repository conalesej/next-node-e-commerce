import React from "react";
import "./Landing.scss";
import { Carousel, Categories, FilterBar } from "./components";
import Typography from "@mui/material/Typography";

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
      <div className="products-container">
        <div className="title">
          <Typography variant="h4">Our Products</Typography>
        </div>
        <div className="filter-bar">
          <FilterBar />
        </div>
        <div className="products-list"></div>
      </div>
    </div>
  );
};

export default page;
