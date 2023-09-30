import React from "react";
import "./FilterBar.scss";
import {
  SwitchComponent,
  ProductFilter,
  PriceRange,
  ProductSearch,
} from "./components";

interface IFilterBar {}
const FilterBar: React.FC<IFilterBar> = () => {
  return (
    <div className="filter-container">
      <div className="filter">
        <div className="switch">
          <SwitchComponent />
        </div>
        <div className="filter">
          <ProductFilter />
        </div>
        <div className="search">
          <ProductSearch />
        </div>
        <div className="price-range">
          <PriceRange />
        </div>
      </div>
      <div className="filter-chips">s</div>
    </div>
  );
};

export default FilterBar;
