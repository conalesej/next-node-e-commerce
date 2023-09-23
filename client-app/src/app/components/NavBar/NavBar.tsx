import React from "react";
import "./NavBar.scss";
import Link from "next/link";
import { Avatar } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "@/app/landing/components/Search/SearchBar";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link href="/landing" className="navbar-brand">
          E-Commerce Store
        </Link>
        <Link href="/" className="nav-item">
          Categories
        </Link>
        <Link href="/" className="nav-item">
          Brands
        </Link>
        <Link href="/" className="nav-item">
          Contacts
        </Link>
      </div>

      <div className="nav-right">
        <div className="nav-searchbar"></div>
        <Link href="/landing" className="navbar-brand">
          <SearchBar />
        </Link>
        <Link href="/" className="nav-item">
          <ShoppingCartIcon />
        </Link>
        <div className="nav-item avatar">
          <Avatar alt="User Avatar" src="https://unsplash.it/g/640/425" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
