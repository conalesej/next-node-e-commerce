import React from "react";
import "./ProductSearch.scss";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
interface IProductSearch {}
const ProductSearch: React.FC<IProductSearch> = () => {
  return (
    <>
      <TextField
        variant="outlined"
        InputProps={{
          startAdornment: <SearchIcon color="action" />,
        }}
      />
    </>
  );
};

export default ProductSearch;
