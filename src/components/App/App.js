/***********************************************
 * TODO:
 * -Results:
 *   -create book components to be rendered
 *   -put books on the page
 *   -Link to more information
 *    -perform volume request or redirect (https://developers.google.com/books/docs/v1/using#RetrievingVolume)
 * -Bonus:
 *   -handle errors with API requests
 *   -display error message to user when submiting non valid query
 *   -write tests for components
 *   -use Redux
 *   -write tests for Redux
 *   -add animations to books
 ************************************************/

import React, { Component } from "react";
import SearchBox from "../SearchBox";
import LoadingBar from "../LoadingBar";
import getBooks from "../../API";

class App extends Component {
  state = {
    query: "",
    books: [],
    loading: false,
    loadingBar: false
  };
  handleSearchInput = event => {
    this.setState({
      query: event.target.value
    });
  };
  handleSearchSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, loadingBar: true });
    const books = await getBooks(this.state.query);
    this.setState({ books, loading: false });
    setTimeout(() => {
      this.setState({ loadingBar: false });
    }, 500);
  };
  render() {
    const { query, loading, loadingBar } = this.state;

    return (
      <div>
        {loadingBar ? <LoadingBar loading={loading} /> : null}
        <SearchBox
          query={query}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
      </div>
    );
  }
}

export default App;
