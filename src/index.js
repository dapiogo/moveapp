import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { getAllMovie } from "../src/api/api";
import App from "./components/App/App";
import Favorite from "./components/Favorite/Favorite";
import Header from "../src/components/Header/Header";
import Cookies from 'universal-cookie';
import notFoundImage from "../src/assets/img/image_not_found.jpg";

const cookies = new Cookies();

class Root extends React.Component {

  state = {
    value: "",
    dataMovie: [],
    error: "",
    favorite:cookies.get('favorite') || [],
    notification:''
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

  saveCookies = favoriteItem => {
    const cookieData = JSON.stringify(favoriteItem);
    cookies.set('favorite', cookieData, { path: '/' });
  };

  removeFromFavorite = id => {
      const { favorite } = this.state;
      const newFavs = favorite.filter(favId => favId.imdbID !== id);
      this.setState({ favorite: newFavs, notification:'Remove' }, 
        () => this.saveCookies(favorite)
      );

      this.hideNotification();
  };

  addToFavorite = id => {
    const { dataMovie,favorite } = this.state;

    let newFav = [...dataMovie];
    newFav = newFav.filter(el => el.imdbID === id);
   
    const checkItem =  favorite.find(el => el.imdbID === id) ? false : true;
    
    if(checkItem) {
      this.setState({
        favorite:favorite.concat(newFav),
        notification:'Add'
      }, () => this.saveCookies(favorite))

      this.hideNotification();
    }
  }

  hideNotification = () => {
    setTimeout(() => {
      this.setState({
        notification: ''
      })
    }, 1000);
  }


  render(){
    const { dataMovie, favorite, value, error,notification } = this.state;
    const { handleSubmit, handleInputChange, addToFavorite, removeFromFavorite } = this;
    return (
      <Router>
          {notification ? notification : null}
          <Header favorite={favorite}/>
          <Switch>
            <Route 
              path="/" 
              exact 
              render={() => 
                <App 
                  dataMovie={dataMovie}
                  favorite={favorite}
                  value={value}
                  error={error}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  addToFavorite={addToFavorite}
                  removeFromFavorite={removeFromFavorite}
                />}
            />
            <Route path="/favorite" exact render={()=><Favorite removeFromFavorite={removeFromFavorite} favorite={this.state.favorite} />}/>
          </Switch>
        </Router>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
