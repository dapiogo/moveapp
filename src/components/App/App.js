import React from "react";
import { getAllMovie } from "../../api/api";
import List from "../List/List";
import Search from "../Search/Search";
import Header from "../Header/Header";
import NoResult from "../NoResult/NoResult";
import styles from "./App.module.scss";
import notFoundImage from "../../assets/img/image_not_found.jpg";

class App extends React.Component {
  state = {
    value: "",
    dataMovie: [],
    error: "",
    favs: localStorage.favs ? JSON.parse(localStorage.favs) : []
  };

  handleInputChange = e => {
      this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;

    if (value) {
      return getAllMovie(value)
        .then(data => {
          const { Search, Response, Error } = data;
          if (Response === "True") {
            this.replaceEmptyImage(Search);

            this.setState({
              dataMovie: Search,
              error: ""
            });
          } else {
            this.setState({
              dataMovie: [],
              error: Error,
            });
          }
        })
        .catch(error => {
          this.setState({ error });
        });
    } else {
      this.setState({ error: "please enter the text",dataMovie:[] });
    }

  };

  replaceEmptyImage = data => {
    data.forEach(el => el.Poster.includes('jpg') ? el.Poster : el.Poster = `${notFoundImage}`)
  }

  saveLocalStorage = favs => {
    localStorage.setItem("favs", JSON.stringify(favs));
  };

  removeFromFavorite = id => {
      const { favs } = this.state;
      const newFavs = favs.filter(favId => favId.imdbID !== id);
      this.setState({ favs: newFavs }, 
        () => this.saveLocalStorage(favs)
      );
  };

  addToFavorite = id => {
    const { dataMovie,favs } = this.state;

    let newFav = [...dataMovie];
    newFav = newFav.filter(el => el.imdbID === id);
   
    const checkItem =  favs.find(el => el.imdbID === id) ? false : true;
    
    if(checkItem) {
      this.setState({
        favs:favs.concat(newFav)
      }, () => this.saveLocalStorage(favs))
    }
  }
  

  render() {
    const { dataMovie, favs, value, error } = this.state;
    const { handleSubmit, handleInputChange, addToFavorite, removeFromFavorite } = this;

    return (
        <div className={styles.wrapper}>
          <Header />
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
              fav={favs} 
              addToFavorite={addToFavorite} 
              removeFromFavorite={removeFromFavorite}
              />
            ) : error ? <NoResult error={error}/> : null}
          </div>
        </div>
    );
  }
}


export default App;