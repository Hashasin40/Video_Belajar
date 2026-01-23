import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarImage from "./NavbarImage";
import ButtonLink from "../button/ButtonLink";
import ProfileDropdown from "./ProfileDropdown";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
<nav className="relative box-border border-b-2 border-gray-200 px-4 py-2 flex items-center justify-between max-w-screen-xl mx-auto">
  {/* Logo selalu tampil */}
  <NavbarImage />

  {/* Desktop Menu: hanya tampil di md ke atas */}
  <div className="hidden md:flex items-center justify-end">
    <ButtonLink to="/category" className="mx-2 transition">
      <span className="relative text-green-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-green-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
        Category
      </span>
    </ButtonLink>
    <ProfileDropdown />
  </div>
  

  {/* Hamburger Menu: hanya tampil di mobile */}
  <div className="md:hidden">
    <HamburgerMenu isOpen={isHamburgerOpen} setIsOpen={setIsHamburgerOpen}/>
  </div>
</nav>
  );
};

export default Navbar;