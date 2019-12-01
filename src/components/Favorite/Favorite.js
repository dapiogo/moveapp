import React from "react";
import Header from "../Header/Header";
import List from "../List/List";
import { Link } from "react-router-dom";
import styles from "./Favorite.module.scss";

const Favorite = ({favorite, removeFromFavorite}) => {
    
    return (
        <>
            <div className={styles.wrapper}>
            <h1>favorite movie({favorite.length ? favorite.length : 'empty'})</h1>
            {favorite.length ? (
                <List 
                    data={favorite} 
                    fav={favorite} 
                    removeFromFavorite={removeFromFavorite}
                />
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