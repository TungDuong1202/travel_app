import React, { useState } from "react";
import { MdDirectionsBoatFilled } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import "./navbar.css";
import { Link } from "react-router-dom";

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
          <Link to="/" className="logo">
            <MdDirectionsBoatFilled className="icon" />
            <h2>Travel</h2>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists">
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/packages" className="navLink">
                Packages
              </Link>
            </li>
            <button className="btnn">
              <Link to="/">Liên hệ Group3</Link>
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
