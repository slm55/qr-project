import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <header className="flex justify-between py-5 px-7">
      <div className="flex space-x-2 font-semibold text-xl ">
        <Link to="/">QR</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/lookbook">LOOKBOOK</Link>
        <Link to="/giftboxes">GIFTBOXES</Link>
        <Link className="text-red-500" to="/sale">SALE</Link>
        <Link to="/stores">STORES</Link>
        <Link to="/kids">KIDS</Link>
      </div>
      <div>
        <SearchIcon />
        <WorkIcon />
        <MenuIcon />
      </div>
    </header>
  );
}

export default Header;
