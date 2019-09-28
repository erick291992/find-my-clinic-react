import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Map from "../../component/Map";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardEntity from "../../component/CardEntity";
import { connect } from "react-redux";
import { selectActiveClinics } from "../../store/clinic/reducer";
import addClinics from "../../store/clinic/action";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Clinics from "../../component/Clinics";
import Footer from "../../component/Footer";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "98%",
    margin: "0px"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    margin: "0px"
  }
});

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      clinicSelected: null
    };
  }

  componentDidMount() {
    this.setState({ list: this.props.mylist });
  }

  //   handleSelection = clinicId => {
  //     let listSelected = [];
  //     this.state.list.forEach(clinic => {
  //       if (clinic._id === clinicId) {
  //         this.setState({ clinicSelected: clinic });
  //         listSelected.push(clinic);
  //         this.props.addClinics(listSelected);
  //       }
  //     });

  //     this.props.history.push("/clinic-details");
  //   };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Map w={"100%"} h={"64vh"} />
              <Footer />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("->", selectActiveClinics(state));
  return {
    mylist: selectActiveClinics(state)
  };
};
Results.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  addClinics
)(withRouter(withStyles(styles)(Results)));
const hideListStyle = {
  display: "block"
};
const showListStyle = {
  display: "none"
};
const divStyle = {
  overflowY: "scroll",
  //  width: "100%",
  //float: "left",
  height: "80vh",
  margin: 0
  //position: "relative"
};
