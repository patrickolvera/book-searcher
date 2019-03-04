import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, LinearProgress } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1
  }
};

class LoadingBar extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 100);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  progress = () => {
    const { completed } = this.state;
    if (this.props.loading) {
      this.setState({ completed: completed + 30 });
    } else {
      this.setState({ completed: 100 });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LinearProgress variant="determinate" value={this.state.completed} />
      </div>
    );
  }
}

LoadingBar.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default withStyles(styles)(LoadingBar);
