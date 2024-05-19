import React, { useState } from "react";
import { MdDirectionsBoatFilled } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNavBar = () => {
    setActive("navBar activeNavbar");
  };
  const closeNavBar = () => {
    setActive("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <MdDirectionsBoatFilled className="icon" />
            <h2>Travel</h2>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <button className="btnn">
              <a href="#">Liên hệ Group3</a>
            </button>
          </ul>
          <div onClick={closeNavBar} className="closeNavBar">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNavBar} className="tagNavBar">
          <FaBars className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
