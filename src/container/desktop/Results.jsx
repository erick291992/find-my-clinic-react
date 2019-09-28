import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Map from "../../component/Map";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardEntity from "../../component/CardEntity";
import { connect } from "react-redux";
import {
  selectActiveClinics,
  selectedClinic,
  selectFilteredClinics
} from "../../store/clinic/reducer";
import { addClinics } from "../../store/clinic/action";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Footer from "../../component/Footer";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "98%",
    margin: "0px",
    paddingTop: "30px"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    margin: "0px"
  }
});

const mapStateToProps = state => {
  return {
    mylist: selectActiveClinics(state),
    clinic: selectedClinic(state),
    mylistfiltered: selectFilteredClinics(state)
  };
};

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      clinicSelected: null
    };
  }

  componentDidMount() {
    this.setState({
      list:
        this.props.mylistfiltered != null
          ? this.props.mylistfiltered
          : this.props.mylist
    });
  }

  handleSelection = clinicId => {
    let listSelected = [];
    this.state.list.forEach(clinic => {
      if (clinic._id === clinicId) {
        this.setState({ clinicSelected: clinic });
        listSelected.push(clinic);
        this.props.addClinics(listSelected);
      }
    });

    this.props.history.push("/clinic-details");
  };

  reOrderList = clinic => {
    let newList = [];
    newList.push(clinic);
    this.state.list.forEach(lis => {
      if (clinic._id != lis._id) {
        newList.push(lis);
      }
    });
    return newList;
  };

  render() {
    const { classes } = this.props;
    let showList = window.innerWidth < 600 ? showListStyle : hideListStyle;
    let selected = this.props.clinic;

    let listOfClinics = "";
    if (selected != null) {
      listOfClinics = this.reOrderList(selected).map(clinic => {
        let openingHours = "";
        clinic.operatingHours.forEach(hours => {
          openingHours += hours + " ";
        });
        return (
          <div onClick={() => this.handleSelection(clinic._id)}>
            <CardEntity
              title={clinic.name}
              subtitle=""
              hours={openingHours}
              categories={clinic.searchCategories.toString()}
              url={clinic.email}
              active={selected._id === clinic._id ? true : false}
              style={{ margin: "0px", border: "1 solid #85C1E9" }}
            />
          </div>
        );
      });
    } else {
      listOfClinics = this.state.list.map(clinic => {
        let openingHours = "";
        clinic.operatingHours.forEach(hours => {
          openingHours += hours + " ";
        });
        return (
          <div onClick={() => this.handleSelection(clinic._id)}>
            <CardEntity
              title={clinic.name}
              subtitle=""
              hours={openingHours}
              categories={clinic.searchCategories.toString()}
              url={clinic.email}
              active={false}
              style={{ margin: "0px" }}
            />
          </div>
        );
      });
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} lg={6}>
            <div style={divStyle}>
              <div style={showList}>
                <Paper className={classes.paper}>{listOfClinics}</Paper>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <Map w={"100%"} h={"70vh"} />
            </Paper>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { addClinics }
)(withRouter(withStyles(styles)(Results)));
const hideListStyle = {
  display: "block"
};
const showListStyle = {
  display: "none"
};
const divStyle = {
  overflowY: "scroll",
  height: "70vh",
  margin: 0
};
// onClick={() => this.handleSelection(clinic._id)}
