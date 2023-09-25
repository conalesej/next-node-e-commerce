import React from "react";

import "./CategoryCard.scss";
const CategoryCard = () => {
  return (
    <div className="CategoryCard">
      <div className="card-polygon">
        <div className="card-picture">
          <img src="https://unsplash.it/150/150" alt="" />
        </div>
        <div className="card-footer">
          <div className="card-info">
            <div>Action</div>
            <div>290 Games</div>
          </div>
          <div className="card-button">{">"}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
