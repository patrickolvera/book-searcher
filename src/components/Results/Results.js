import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Book from "../Book";

const styles = theme => ({
  root: {
    height: "80%",
    margin: "2rem auto",
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      // backgroundColor: theme.palette.secondary.main,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "normal",
      maxWidth: 960
    }
    // [theme.breakpoints.up("lg")]: {
    //   // width: "75%",
    //   backgroundColor: theme.palette.secondary.main
    // }
  }
});

class Results extends Component {
  render() {
    const { classes, books } = this.props;
    return (
      <div className={classes.root}>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    );
  }
}

Results.prototypes = {
  classes: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
};

export default withStyles(styles)(Results);
