import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="flex flex-col">
      <div className="flex justify-between items-center px-7">
        <nav className="flex space-x-3 items-center font-semibold text-xl">
          <Link className="text-3xl" to="/mainpage">
            QR
          </Link>
          <Link
            className="py-5"
            to="/shop"
            onMouseEnter={() => {
              setCategoriesOpen(true);
            }}
            onMouseLeave={() => {
              setCategoriesOpen(false);
            }}
          >
            SHOP
          </Link>
          <Link to="/lookbook">LOOKBOOK</Link>
          <Link to="">GIFTBOXES</Link>
          <Link className="text-red-600" to="">
            SALE
          </Link>
          <Link to="">STORES</Link>
          <Link to="">KIDS</Link>
        </nav>
        <div className="flex space-x-6">
          <SearchIcon />
          <WorkOutlineIcon />
          <MenuIcon />
        </div>
      </div>
      {categoriesOpen && (
        <div
          className="px-7 py-3 flex space-x-3 text-2xl font-semibold border-y-2 border-black"
          onMouseEnter={() => setCategoriesOpen(true)}
          onMouseLeave={() => setCategoriesOpen(false)}
        >
          <Link to="/shop">All</Link>
          <Link to="/shop?category=t-shirts">T-Shirts</Link>
          <Link to="/shop?category=shirt">SHIRT</Link>
          <Link to="/shop?category=top">Top</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
