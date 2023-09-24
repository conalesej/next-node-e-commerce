import React from "react";
import "./Categories.scss";

interface ICategories {}
const Categories: React.FC<ICategories> = () => {
  return (
    <div className="Categories">
      <div className="category-item-1">1</div>
      <div className="category-item-2">2</div>

      <div className="category-item-3">3</div>
      <div className="category-item-4">4</div>
    </div>
  );
};

export default Categories;
