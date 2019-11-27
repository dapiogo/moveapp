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
    favs:localStorage.favs ? JSON.parse(localStorage.favs) : []
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

//   deleteCar = (id) => {
//     let listCar = [...this.state.listCar];
//     listCar = listCar.filter(car => car.id !== id);
//     this.setState({
//       listCar
//     })
//   }

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

    const { favs } = this.state;
    const newFavs = favs.concat(id);
    this.setState({ favs: newFavs }, () =>
      this.saveInLocalStorage(this.state.favs)
    );
  }

handleFavButtonClicked = (id) => {
    this.addToFavorite(id);
    
};


  

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
            {dataMovie.length ? <List data={dataMovie} addToFavorite={this.handleFavButtonClicked}/> : <p>{error}</p>}
          </div>
        </div>
    );
  }
}


export default App;