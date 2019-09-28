import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  cardMovil: {
    //display: "flex",
    margin: "0",
    width: "100vW"
  },
  cardDesktop: {
    //display: "flex",
    margin: "0",
    width: "100%"
  },
  detailsActive: {
    backgroundColor: "#AED6F1"
  },
  detailsNoActive: {
    backgroundColor: "#FFFFFF"
  },
  content: {
    //flex: "1 0 auto"
  }
});

class CardEntity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const width = window.innerWidth;
    const { classes } = this.props;

    let styleCard = width < 600 ? classes.cardMovil : classes.cardDesktop;

    return (
      <Card className={styleCard}>
        <div
          className={
            this.props.active ? classes.detailsActive : classes.detailsNoActive
          }
        >
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {this.props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {this.props.subtitle}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {this.props.hours}
            </Typography>
            <Typography variant="overline" color="textSecondary">
              {this.props.categories}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image="/static/images/cards/live-from-space.jpg"
          title="Live from space album cover"
        />
      </Card>
    );
  }
}
CardEntity.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardEntity);

const cardDescriptionStyleActive = {
  padding: "3%",
  backgroundColor: "#F4F6F6",
  border: "1px solid #000000",
  borderRadius: "5px"
};

const cardDescriptionStyleNoActive = {
  padding: "3%",
  backgroundColor: "#FFFFFF"
};
