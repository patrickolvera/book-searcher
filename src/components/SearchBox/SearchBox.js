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
    const { classes } = this.props;

    return (
      <Fragment>
        <Typography className={classes.heading} variant="h3" gutterBottom>
          Book Searcher
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="search"
            label="Lets Find Some Books"
            type="search"
            className={classes.textField}
            margin="auto"
          />
          <Button>Search</Button>
        </form>
      </Fragment>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBox);
