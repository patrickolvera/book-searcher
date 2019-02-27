/***********************************************
 * TODO:
 * -Search:
 *   -handle search input submit with an API request
 *   -loading animation during request
 * -Results:
 *   -create book components to be rendered
 *   -put books on the page
 *   -Link to more information
 * -Bonus:
 *   -handle errors with API requests
 *   -display error message to user when submiting non valid query
 *   -write tests for components
 *   -use Redux
 *   -write tests for Redux
 ************************************************/

import React, { Component } from "react";
import SearchBox from "../SearchBox";

class App extends Component {
  state = {
    query: ""
  };
  handleSearchInput = event => {
    this.setState({
      query: event.target.value
    });
  };
  render() {
    return (
      <div>
        <SearchBox
          query={this.state.query}
          handleSearchInput={this.handleSearchInput}
        />
      </div>
    );
  }
}

export default App;
