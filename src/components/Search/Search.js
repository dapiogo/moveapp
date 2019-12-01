import React from "react";
import search from "../../assets/img/search.svg";
import styles from './Search.module.scss';

const Search = ({ onsubmit, onchange, value }) => (
  <div className={styles.wrapper}>
    <form onSubmit={onsubmit}>
      <input className={styles.wrapper__input}
        type="text" placeholder="Search movie" onChange={onchange} value={value} />
      <button><img src={search} alt="search" /></button>
    </form>
  </div>
);

export default Search;
