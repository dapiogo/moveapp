import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import favorite from "../../assets/img/favorite.svg";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__logo}>
      <Link to="/"> <img src={logo} alt="logo"/></Link>
        <p>Movie App</p>
      </div>
      <div className={styles.wrapper__favorite}>
        <Link to="/favorite"><img src={favorite} alt="favorite"/></Link>
      </div>
    </div>
  );
};

export default Header;
