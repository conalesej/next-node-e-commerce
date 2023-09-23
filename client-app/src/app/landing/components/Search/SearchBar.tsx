"use client"
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";

interface ISearchBar {}
const SearchBar: React.FC<ISearchBar> = () => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ marginLeft: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search car" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, margin: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <ClearIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
