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

const styles = theme => ({
  card: {
    margin: 15,
    overflow: "hidden",
    textAlign: "left",
    height: 316,
    width: 340,
    [theme.breakpoints.up("sm")]: {
      margin: "auto auto 2rem auto",
      width: "40%",
      maxWidth: 390
    }
  },
  media: {
    height: 260,
    width: 140
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  content: {
    float: "right",
    width: "45%",
    height: 320
  },
  button: {
    marginTop: "0.6rem"
  }
});

function Book(props) {
  const { classes, book } = props;

  return (
    <Card className={classes.card}>
      <img
        className={classes.media}
        src={book.volumeInfo.imageLinks.thumbnail}
        title={book.volumeInfo.title}
        alt={book.volumeInfo.title}
      />
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          {book.volumeInfo.title}
        </Typography>
        <Typography component="p">{book.volumeInfo.description}</Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} color="primary" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

Book.propTypes = {
  classes: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired
};

export default withStyles(styles)(Book);
