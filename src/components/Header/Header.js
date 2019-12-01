import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import favoriteImgEmpty from "../../assets/img/favorite.svg";
import favoriteImgFull from "../../assets/img/favorite_done.svg";

const Header = ({ favorite }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__logo}>
        <Link to="/"> <img src={logo} alt="logo" /></Link>
        <p>Movie App</p>
      </div>
      <div className={styles.wrapper__favorite}>
        <Link to="/favorite"><img src={favorite.length ? favoriteImgFull : favoriteImgEmpty} alt="favorite" /></Link>
      </div>
    </div>
  );
}

export default Header;
