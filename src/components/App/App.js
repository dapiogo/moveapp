import React from "react";
import { getAllMovie } from "../../api/api";
import List from "../List/List";
import Search from "../Search/Search";
import Header from "../Header/Header";
import styles from "./App.module.scss";

class App extends React.Component {
  state = {
    value: "",
    dataMovie: [],
    error: "",
    isLoading: true,
    favs: []
  };

  handleInputChange = e => {
      this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value, isLoading } = this.state;

    if (value) {
      return getAllMovie(value)
        .then(data => {
          const { Search, Response, Error } = data;
          if (Response === "True") {
            this.setState({
              dataMovie: Search,
              isLoading: !isLoading,
              error: ""
            });
          } else {
            this.setState({
              dataMovie: [],
              error: Error,
              isLoading: !isLoading
            });
          }
        })
        .catch(error => {
          this.setState({ error, isLoading: !isLoading });
        });
    } else {
      this.setState({ error: "Prosze wpisac tekst" });
    }
  };


saveInLocalStorage = favs => {
    localStorage.setItem("favs", JSON.stringify(favs));
  };


  removeFromFavorite = id => {
    const { favs } = this.state;
    const newFavs = favs.filter(favId => favId.imdbID !== id);
    this.setState({ favs: newFavs }, () =>
      this.saveInLocalStorage(this.state.favs)
    );
  };



  addToFavorite = (id) => {
    const { dataMovie,favs } = this.state;
    let newFav = [...dataMovie];

    const checkList = favs.filter(el => {
      if(el.imdbID === id){
        return false;
      }
      return true;
    })
    
    newFav = newFav.filter(el => el.imdbID === id);

    this.setState({
      favs:favs.concat(newFav)
    })
 


  }
  

  render() {
    const { dataMovie, value, error } = this.state;

    return (
        <div className={styles.wrapper}>
          <Header />
          <Search
            onsubmit={this.handleSubmit}
            onchange={this.handleInputChange}
            value={value}
          />
          <div className={styles.wrapper__result}>
            {dataMovie.length ? <List data={dataMovie} addToFavorite={this.addToFavorite}/> : <p>{error}</p>}
          </div>
        </div>
    );
  }
}


export default App;