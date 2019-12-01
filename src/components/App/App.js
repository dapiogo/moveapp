import React from "react";
import List from "../List/List";
import Search from "../Search/Search";
import NoResult from "../NoResult/NoResult";
import styles from "./App.module.scss";

const App = ({ dataMovie, favorite, value, error, handleSubmit, handleInputChange, addToFavorite, removeFromFavorite }) => {
  return (
    <div className={styles.wrapper}>
      <Search
        onsubmit={handleSubmit}
        onchange={handleInputChange}
        value={value}
      />
      <div className={styles.wrapper__result}>
        {dataMovie.length ? 
        (
          <List 
          data={dataMovie} 
          fav={favorite} 
          addToFavorite={addToFavorite} 
          removeFromFavorite={removeFromFavorite}
          />
        ) : error ? <NoResult error={error}/> : null }
      </div>
    </div>
  )
}


export default App;