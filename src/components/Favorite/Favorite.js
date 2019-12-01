import React from "react";
import List from "../List/List";
import { Link } from "react-router-dom";
import { translation } from "../../assets/translation/translation"
import back from "../../assets/img/back.svg";
import styles from "./Favorite.module.scss";

const Favorite = ({ favorite, removeFromFavorite }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1>{translation.favoriteMovie}</h1>
                {favorite.length ? (
                    <div>
                        <p className={styles.wrapper__back}> <Link to="/">
                            <img src={back} alt="back" />{translation.backtoHome}</Link>
                        </p>
                        <List
                            data={favorite}
                            fav={favorite}
                            removeFromFavorite={removeFromFavorite}
                        />
                    </div>
                )
                    : (
                        <div className={styles.wrapper__empty}>
                            <p>{translation.listEmpty} <Link to="/">{translation.backtoHome}</Link></p>
                        </div>
                    )}
            </div>
        </>
    )
}

export default Favorite;