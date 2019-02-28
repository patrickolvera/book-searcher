import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography, withStyles, TextField, Button } from "@material-ui/core";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    color: "grey",
    paddingTop: "4rem",
    textAlign: "center",
    width: "100%"
  },
  textField: {
    width: "50%"
  }
});

class SearchBox extends Component {
  render() {
    const {
      classes,
      query,
      handleSearchInput,
      handleSearchSubmit
    } = this.props;

    return (
      <Fragment>
        <Typography className={classes.heading} variant="h3" gutterBottom>
          Book Searcher
        </Typography>
        <form
          className={classes.container}
          onSubmit={handleSearchSubmit}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="search"
            label="Lets Find Some Books"
            type="search"
            className={classes.textField}
            margin="normal"
            value={query}
            onChange={handleSearchInput}
          />
          <Button type="submit">Search</Button>
        </form>
      </Fragment>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchBox);
