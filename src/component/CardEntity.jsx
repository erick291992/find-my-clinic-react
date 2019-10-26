import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  cardMovil: {
    margin: "0",
    width: "100%"
  },
  cardDesktop: {
    margin: "0",
    width: "100%"
  },
  detailsActive: {
    backgroundColor: "#AED6F1"
  },
  detailsNoActive: {
    backgroundColor: "#FFFFFF"
  }
});

class CardEntity extends Component {
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
            <Typography component={"h5"} variant={"h5"}>
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
