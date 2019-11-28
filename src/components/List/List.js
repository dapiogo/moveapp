import React from "react";
import styles from "./List.module.scss";
import info from "../../assets/img/info.svg";
import favorite from "../../assets/img/favorite.svg";

const List = ({ data,addToFavorite }) => {
  return (
    <div className={styles.wrapper}>
    <ul>
      {data.map(({ Title: title, Year: year, imdbID: id, Poster: img }) => (
        <li className={styles.wrapper__item} key={id} >
            <img src={img} alt={id} />
            <div className={styles.wrapper__item_desc}>
              <h3>{title}</h3>
              <p>{year}</p>
            </div>
            <div className={styles.wrapper__item_add}>
              <p><img onClick={() => addToFavorite(id)} className={styles.icon} src={favorite} alt={title}/></p>
            </div>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default List;
