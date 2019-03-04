import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, withStyles, TextField, Button } from "@material-ui/core";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "4rem"
    }
  },
  heading: {
    paddingTop: "4rem",
    textAlign: "center",
    width: "100%"
  },
  textField: {
    width: "72%",
    maxWidth: 600
  },
  input: {
    // color: "white"
  },
  button: {
    color: "white",
    fontSize: "1.54rem",
    marginTop: "0.33rem",
    marginLeft: "0.2rem",
    backgroundColor: "#FF7417",
    "&:hover": {
      background: "#ffa830"
    }
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
        <Typography
          color="primary"
          className={classes.heading}
          variant="h3"
          gutterBottom
        >
          Book Finder
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
            variant="outlined"
            onChange={handleSearchInput}
            InputProps={{
              className: classes.input
            }}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Search
          </Button>
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
