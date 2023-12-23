import React from "react";
import NavbarIcon from "./NavbarIcon";
import NavbarProfile from "./NavbarProfile";
import "./Navbar.css"; //

const Navbar = () => {
  return (
    <div className="flexContainer">
      <NavbarIcon />
      <NavbarProfile />
    </div>
  );
};

export default Navbar;
