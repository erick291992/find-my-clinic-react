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
import {
  saveSelectedClinic,
  getSelectedClinic,
  reOrderList
} from "../../utils/utils";
import { getFilteredClinics } from "../../service/clinicService";
import TotalNumberClinic from "../../component/TotalNumberClinic";
import { MESSAGE_EMPTY_RESULTS } from "../../utils/constants";

const styles = theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "calc(100vh - 250px)"
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "calc(100vh - 200px)"
    }
  },
  paper: {
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
      textAlign: "center",
      margin: "0px",
      overflowY: "scroll",
      height: "calc(100vh - 250px)"
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0),
      textAlign: "center",
      margin: "0px",
      overflowY: "scroll",
      height: "calc(100vh - 170px)"
    }
  }
});

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
          <div
            onClick={() => this.handleSelection(clinic._id)}
            key={clinic._id}
          >
            <CardEntity
              key={clinic._id}
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
          <div
            onClick={() => this.handleSelection(clinic._id)}
            key={clinic._id}
          >
            <CardEntity
              key={clinic._id}
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
      <Grid container spacing={0}>
        <Grid item xs={12} md={6} lg={6} className={classes.root}>
          <Paper className={classes.paper}>
            {listOfClinics.length > 0 ? listOfClinics : MESSAGE_EMPTY_RESULTS}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className={classes.root}>
          <TotalNumberClinic total={listOfClinics.length} />
          <Map list={clinics} />
        </Grid>
      </Grid>
    );
  }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    mylistfiltered: selectFilteredClinics(state),
    myclinics: selectActiveClinics(state)
  };
};

export default connect(
  mapStateToProps,
  { addFiltered }
)(withRouter(withStyles(styles)(Results)));
