import React from "react";
import user from "../images/user.jpg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
function Header() {
  return (
    <div className="main_header">
    <h2>Dealy Viruses</h2>
    <div className="icons">
      <a href="">
        <FaFacebookF className="icon" />
      </a>
      <a href="">
        <FaLinkedinIn className="icon" />
      </a>
      <img src={user} alt="" className="user" />
    </div>
  </div>
  );
}

export default Header;
