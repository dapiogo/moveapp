import React from "react";
import styles from "./List.module.scss";
import favorite from "../../assets/img/favorite.svg";
import favorite_done from "../../assets/img/favorite_done.svg";
import bin from "../../assets/img/bin.svg";

const List = ({ data,fav,addToFavorite,removeFromFavorite}) => {
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
                {fav.find(el => el.imdbID === id) ? (
                  <p><img onClick={() => removeFromFavorite(id)} className={styles.icon} src={addToFavorite ? favorite_done : bin} alt={title}/></p>
                ) : (
                  <p><img onClick={() => addToFavorite(id)} className={styles.icon} src={favorite} alt={title}/></p>
                )}
              </div>
          </li>
        ))}
        </ul>
    </div>
  );
};

export default List;
