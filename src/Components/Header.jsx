import React from "react";
import virousImg from "../images/Frame 9.png";
import header from "../images/header-img.PNG";
function Header() {
  return (
    <div className="main_conatiner">
      <div className="img">
        <img src={virousImg} alt="" />
      </div>
      <div className="main_content">
        <span>COVID-19 ALERT</span>
        <h2>Together we fight COVID-19</h2>
        <p>
          Seque empowers you to get more done with intense focus and zero
          <br />
          interruptions.Seque empowers you to get more done with intense focus
          <br />
          and zero interruptions.
        </p>
        <a href="" className="help_btn">
          Let`s help
        </a>
      </div>

      <div className="image_box">
        <img src={header} alt="" />
      </div>
    </div>
  );
}

export default Header;
