import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import favorite from "../../assets/img/favorite.svg";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={logo} alt="logo"/>
        Movie App</div>
      <div>
        <img src={favorite} alt="favorite"/>
      </div>
    </div>
  );
};

export default Header;
