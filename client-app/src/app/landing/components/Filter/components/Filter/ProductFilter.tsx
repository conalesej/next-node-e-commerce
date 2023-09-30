import React from "react";
import "./ProductFilter.scss";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Button from "@mui/material/Button";

interface IProductFilter {}

const ProductFilter: React.FC<IProductFilter> = () => {
  return (
    <>
      <Button variant="contained" startIcon={<FilterAltOutlinedIcon />} />
    </>
  );
};

export default ProductFilter;
