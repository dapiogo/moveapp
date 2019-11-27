import React from "react";
import ReactDOM from "react-dom";
import { getAllMovie } from "../src/api/api";
import List from "../src/components/List/List";
import Search from "../src/components/Search/Search";
import Header from "../src/components/Header/Header";
import styles from "./App.module.scss";

class App extends React.Component {
  state = {
    value: "",
    dataMovie: [],
    error: "",
    isLoading: true
  };

  handleInputChange = e => {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
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
            console.log("taua");
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
        <div className="result">
          {dataMovie.length ? <List data={dataMovie} /> : <p>{error}</p>}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
