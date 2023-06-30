import React from "react";
import Style from "../styles/Home.module.css";

const Header = () => {
  return (
    <>
      <div className={Style.logo}>Next Blog</div>
      <div>
        <ul className={Style.menu}>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
