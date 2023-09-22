import React from "react";
import "./NavBar.scss";
import Link from "next/link";
import { Avatar } from "@mui/material";

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
        <Link href="/landing" className="navbar-brand">
          E-Commerce Store
        </Link>
        <Link href="/" className="nav-item">
          Categories
        </Link>
        <div className="nav-item avatar">
          <Avatar alt="User Avatar" src="https://unsplash.it/g/640/425" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
