import React from "react";
import "./Categories.scss";
import CategoryCard from "./CategoryCard/CategoryCard";

interface ICategories {}
const Categories: React.FC<ICategories> = () => {
  return (
    <div className="Categories">
      <div className="category-item-1">
        <CategoryCard />
      </div>
      <div className="category-item-2">
        <CategoryCard />
      </div>
      <div className="category-item-3">
        <CategoryCard />
      </div>
      <div className="category-item-4">
        <CategoryCard />
      </div>
    </div>
  );
};

export default Categories;
