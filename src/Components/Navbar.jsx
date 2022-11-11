import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const removeShadw = useRef(null);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
    setToggle(true);
  };
  const hide_menu = () => {
    console.log("hi");
    removeShadw.current.classList.remove("show__menu");
  };
  return (
    <div
      className={scrolled ? "navbar_container scrolled" : "navbar_container"}
    >
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
              Home
            </a>
          </li>
          <li>
            <a href="" onClick={hide_menu}>
              What we do
            </a>
          </li>
          <li>
            <a href="" onClick={hide_menu}>
              Prevention
            </a>
          </li>
          <li>
            <a href="" onClick={hide_menu}>
              Symptoms
            </a>
          </li>
          <li>
            <a href="" onClick={hide_menu}>
              Contact Us
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
