import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-between w-full p-8 items-start">
      <div className="flex flex-col items-start justify-around space-y-5">
        <div className="font-extrabold text-xl">QAZAQ REPUBLIC</div>
        <div className="text-base font-semibold flex flex-col space-y-1">
          <Link>SHOP</Link>
          <Link>ABOUT</Link>
          <Link>FAQ</Link>
          <Link>CAREER IN QR</Link>
          <Link>CONTACTS</Link>
          <Link>PAYMENT</Link>
        </div>
        <div className="font-semibold">FOR CORPORATE CLIENTS</div>
        <div className="text-xs font-medium">© 2024 All rights reserved</div>
      </div>
      <div className="flex space-x-2 w-1/3 items-stretch mt-8 p-2 border-b border-gray-400">
        <input className="outline-none grow" type="email" placeholder="EMAIL"/>
        <button className="font-semibold text-base">SUBSCRIBE</button>
      </div>
    </footer>
  );
}

export default Footer;
