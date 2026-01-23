import React from "react";
import { Link } from "react-router-dom";
import VideoBelajar from "../../assets/VideoBelajar.png";

const NavbarImage = () => {
  return (
    <nav className=" flex items-center justify-between">
      
      <Link to="/" className="inline-block">
        <img
          src={VideoBelajar}
          alt="Logo"
          className="h-[50px] w-[230px] object-contain"
        />
      </Link>
      
    </nav>
  );
};

export default NavbarImage;
