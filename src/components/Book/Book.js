import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";

const bookSize = {
  height: 260,
  width: 140
};

const styles = theme => ({
  card: {
    overflow: "hidden",
    textAlign: "left",
    height: 380,
    margin: "auto auto 2rem auto",
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      margin: "auto auto 2rem auto",
      width: "65%"
    },
    [theme.breakpoints.up("md")]: {
      margin: "auto auto 2rem auto",
      width: "40%"
    }
  },
  media: {
    height: bookSize.height,
    width: bookSize.width,
    [theme.breakpoints.up("xs")]: {
      width: "36%",
      height: "70%"
    }
  },
  content: {
    float: "right",
    width: "50%",
    height: 320
  },
  h5: {
    fontSize: "1.4rem",
    maxHeight: 210,
    overflow: "hidden",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1rem"
    }
  },
  subHeadings: {
    marginTop: "2rem"
  },
  button: {
    marginTop: "4.3rem",
    textDecoration: "none"
  }
});

const Book = props => {
  const { classes, book } = props;

  return (
    <Card className={classes.card}>
      <img
        className={classes.media}
        src={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : `https://via.placeholder.com/${bookSize.height}x${bookSize.width}`
        }
        title={book.volumeInfo.title}
        alt={book.volumeInfo.title}
      />
      <CardContent className={classes.content}>
        <Typography className={classes.h5} variant="h5" component="h2">
          {book.volumeInfo.title}
        </Typography>
        <Typography className={classes.subHeadings} component="p">
          Author:
        </Typography>
        <Typography component="p" color="textSecondary">
          {book.volumeInfo.authors
            ? book.volumeInfo.authors[0]
            : "Cannot find author"}
        </Typography>
        <Typography className={classes.subHeadings} component="p">
          Publisher:
        </Typography>
        <Typography component="p" color="textSecondary">
          {book.volumeInfo.publisher
            ? book.volumeInfo.publisher
            : "Cannot find publisher"}
        </Typography>
      </CardContent>
      <CardActions>
        <a
          className={classes.button}
          href={book.volumeInfo.infoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="primary" size="small">
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

Book.propTypes = {
  classes: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired
};

export default withStyles(styles)(Book);
