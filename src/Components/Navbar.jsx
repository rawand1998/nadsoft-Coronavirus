import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  FaHome,
  FaInfoCircle,
  FaSignOutAlt,
  FaRegEnvelope,
  FaHandHoldingWater,
} from "react-icons/fa";
import { BsPersonDash } from "react-icons/bs";
function NavBar() {
  const menuRef = useRef(null);
  const removeShadw = useRef(null);
  const [active, setActive] = useState("Home");

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };
  const hide_menu = () => {

    removeShadw.current.classList.remove("show__menu");
  };
  const menuList = [
    { name: "Home", icon: <FaHome /> },
    { name: "About", icon: <FaInfoCircle /> },
    { name: "Prevention", icon: <FaHandHoldingWater /> },
    { name: "Profile", icon: <BsPersonDash /> },
    { name: "Contact Us", icon: <FaRegEnvelope /> },
    { name: "Logout", icon: <FaSignOutAlt /> },
  ];
  return (
    <div className="navbar_container">
      <div className="logo">
        <span>
          <span> COVID19</span>
        </span>
      </div>
      <div className="menu" ref={menuRef}>
        <nav>
          <li>
            {menuList.map(({ name, icon }) => (
              <a
                key={name}
                href="/"
                onClick={hide_menu}
                className={active === name ? "active" : ""}
              >
                {" "}
                {icon} {name}
              </a>
            ))}
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
