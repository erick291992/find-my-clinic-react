import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import CardEntity from "../component/CardEntity";
import { connect } from "react-redux";
import { selectActiveClinics } from "../store/clinic/reducer";
import addClinics from "../store/clinic/action";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "98%",
    margin: "0px"
    // overflowY: "scroll",
    // height: "70vh",
    // margin: 0
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    margin: "0px"
  }
});

class Clinics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      clinicSelected: null
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.state.list.map(clinic => {
          return (
            <div onClick={() => this.handleSelection(clinic._id)}>
              <CardEntity
                title={clinic.name}
                subtitle={clinic.operatingHours[0]}
                hours="9:00"
                categories="cat"
                url="/#"
                style={{ margin: "0px" }}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("Clinics->", selectActiveClinics(state));
  return {
    mylist: selectActiveClinics(state)
  };
};

Clinics.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  addClinics
)(withRouter(withStyles(styles)(Clinics)));
