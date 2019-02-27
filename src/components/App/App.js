/***********************************************
 * TODO:
 * -Search:
 *   -loading animation during request
 * -Results:
 *   -create book components to be rendered
 *   -put books on the page
 *   -Link to more information
 *    -perform volume request (https://developers.google.com/books/docs/v1/using#RetrievingVolume)
 * -Bonus:
 *   -handle errors with API requests
 *   -display error message to user when submiting non valid query
 *   -write tests for components
 *   -use Redux
 *   -write tests for Redux
 ************************************************/

import React, { Component } from "react";
import SearchBox from "../SearchBox";
import getBooks from "../../API";

class App extends Component {
  state = {
    query: "",
    books: []
  };
  handleSearchInput = event => {
    this.setState({
      query: event.target.value
    });
  };
  handleSearchSubmit = async event => {
    event.preventDefault();
    const books = await getBooks(this.state.query);
    this.setState({ books });
    console.log(this.state.books);
  };
  render() {
    return (
      <div>
        <SearchBox
          query={this.state.query}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
      </div>
    );
  }
}

export default App;
