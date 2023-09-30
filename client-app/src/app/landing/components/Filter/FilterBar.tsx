import React from "react";
import "./FilterBar.scss";
import { SwitchComponent } from "./components";
const FilterBar = () => {
  return (
    <div className="filter-container">
      <div className="switch">
        <SwitchComponent />
      </div>
      <div className="filter">
        <SwitchComponent />
      </div>
      <div className="search">
        <SwitchComponent />
      </div>
      <div className="price-range">
        <SwitchComponent />
      </div>
    </div>
  );
};

export default FilterBar;
