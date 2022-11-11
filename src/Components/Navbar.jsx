import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  FaHome,
  FaInfoCircle,
  FaSignOutAlt,
  FaRegEnvelope,
  FaHandHoldingWater,
} from "react-icons/fa";
import snaz from "../images/snaz.png";
function NavBar() {
  const menuRef = useRef(null);
  const removeShadw = useRef(null);
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
    setToggle(true);
  };
  const hide_menu = () => {
    console.log("hi");
    removeShadw.current.classList.remove("show__menu");
  };
  return (
    <div className="navbar_container">
      <div className="logo">
        <span>
          Coronavirus <span> COVID19</span>
        </span>
      </div>
      <div className="menu" ref={menuRef}>
        <nav>
          <li>
            <a href="" onClick={hide_menu} className="active">
              {" "}
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="" onClick={hide_menu}>
              <FaInfoCircle /> What we do
            </a>
          </li>
          <li>
            <a href="" onClick={hide_menu}>
              <FaHandHoldingWater /> Prevention
            </a>
          </li>
          <li>
            <a href="" onClick={hide_menu}>
              <img src={snaz} alt="" className="snaz_img" /> Symptoms
            </a>
          </li>
          <li>
            <a href="" onClick={hide_menu}>
              <FaRegEnvelope /> Contact Us
            </a>
          </li>
          <li>
            <a href="" onClick={hide_menu}>
              <FaSignOutAlt /> Logout
            </a>
          </li>
        </nav>
      </div>
      <span className="mobile__menu">
        <AiOutlineMenu onClick={toggleMenu} className="AiOutlineMenu" />
      </span>
    </div>
  );
}

export default NavBar;
