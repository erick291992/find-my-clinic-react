import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Map from "../../component/Map";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardEntity from "../../component/CardEntity";
import { connect } from "react-redux";
import {
  selectFilteredClinics,
  selectActiveClinics
} from "../../store/clinic/reducer";
import { addFiltered } from "../../store/clinic/action";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Footer from "../../component/Footer";

import {
  saveSelectedClinic,
  getSelectedClinic,
  reOrderList
} from "../../utils/utils";
import { getClinics, getFilteredClinics } from "../../service/clinicService";
import { MESSAGE_EMPTY_RESULTS } from "../../utils/constants";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "98%",
    margin: "0px",
    paddingTop: "3px"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    margin: "0px"
  }
});

const mapStateToProps = state => {
  return {
    mylistfiltered: selectFilteredClinics(state),
    myclinics: selectActiveClinics(state)
  };
};

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  loadClinics = () => {
    const res = getFilteredClinics();
    res.then(clinicsList => {
      this.props.addFiltered(clinicsList);
    });
  };

  componentDidMount() {
    this.loadClinics();
  }

  handleSelection = clinicId => {
    let listSelected = [];
    let list =
      this.props.mylistfiltered.length > 0
        ? this.props.mylistfiltered
        : this.props.myclinics;
    list.forEach(clinic => {
      if (clinic._id === clinicId) {
        listSelected.push(clinic);
        saveSelectedClinic(listSelected);
      }
    });

    this.props.history.push("/clinic-details");
  };

  render() {
    const { classes } = this.props;
    let showList = window.innerWidth < 600 ? showListStyle : hideListStyle;
    let clinics =
      this.props.mylistfiltered.length === 0
        ? this.props.myclinics
        : this.props.mylistfiltered;
    let selected = getSelectedClinic() != null ? getSelectedClinic() : null;

    let listOfClinics = "";
    let listForMap = [];
    if (selected != null) {
      let listForMap = reOrderList(selected[0], clinics);
      listOfClinics = listForMap.map(clinic => {
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
              categories={clinic.searchCategories.join(" , ")}
              url={clinic.email}
              active={selected[0]._id === clinic._id ? true : false}
              style={{ margin: "0px", border: "1 solid #85C1E9" }}
            />
          </div>
        );
      });
    } else {
      listForMap = clinics;
      listOfClinics = listForMap.map(clinic => {
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
              categories={clinic.searchCategories.join(" , ")}
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
                <Paper className={classes.paper}>
                  {listOfClinics.length > 0
                    ? listOfClinics
                    : MESSAGE_EMPTY_RESULTS}
                </Paper>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <Map w={"100%"} h={"75vh"} list={clinics} />
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
  { addFiltered }
)(withRouter(withStyles(styles)(Results)));

const hideListStyle = {
  display: "block"
};
const showListStyle = {
  display: "none"
};
const divStyle = {
  overflowY: "scroll",
  height: "75vh",
  margin: 0
};
