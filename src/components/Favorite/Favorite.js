import React from "react";
import List from "../List/List";
import { Link } from "react-router-dom";
import back from "../../assets/img/back.svg";
import styles from "./Favorite.module.scss";

const Favorite = ({ favorite, removeFromFavorite }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1>favorite movie</h1>
                {favorite.length ? (
                    <div>
                        <p className={styles.wrapper__back}> <Link to="/"><img src={back} alt="back" />back to home</Link> </p>
                        <List
                            data={favorite}
                            fav={favorite}
                            removeFromFavorite={removeFromFavorite}
                        />
                    </div>
                )
                    : (
                        <div className={styles.wrapper__empty}>
                            <p>Twoja lista jest pusta <Link to="/">wroc</Link> aby dodac</p>
                        </div>
                    )}
            </div>
        </>
    )
}

export default Favorite;