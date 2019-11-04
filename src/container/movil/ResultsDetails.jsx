import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import CardEntity from "../../component/CardEntity";
import { connect } from "react-redux";
import { addFiltered } from "../../store/clinic/action";
import {
  selectFilteredClinics,
  selectActiveClinics
} from "../../store/clinic/reducer";
import { getFilteredClinics } from "../../service/clinicService";
import {
  saveSelectedClinic,
  getSelectedClinic,
  reOrderList
} from "../../utils/utils";
import TotalNumberClinic from "../../component/TotalNumberClinic";

const styles = theme => ({
  root: {
    width: "100%",
    height: "calc(100vh - 250px)",
    zIndex: "-1",
    paddingTop: "25px"
  },
  paper: {
    width: "100%",
    textAlign: "left",
    margin: "0px"
  },
  rootBox: {
    [theme.breakpoints.down("sm")]: {
      overflowY: "scroll",
      height: `calc(100vh - 250px)`
    },
    [theme.breakpoints.up("md")]: {
      overflowY: "scroll",
      height: `calc(100vh - 170px)`
    }
  }
});

class ResultsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
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
      this.props.mylistfiltered.length > 0
        ? this.props.mylistfiltered
        : this.props.myclinics;

    let selected = getSelectedClinic() ? getSelectedClinic() : null;

    let listOfClinics = "";
    let listForMap = [];
    if (selected != null) {
      let listForMap = reOrderList(selected[0], clinics);
      listOfClinics = listForMap.map((clinic, index) => {
        let openingHours = "";
        clinic.operatingHours.forEach(hours => {
          openingHours += hours + " ";
        });
        return (
          <div onClick={() => this.handleSelection(clinic._id)} key={index}>
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
      listOfClinics = listForMap.map((clinic, index) => {
        let openingHours = "";
        clinic.operatingHours.forEach(hours => {
          openingHours += hours + " ";
        });
        return (
          <div onClick={() => this.handleSelection(clinic._id)} key={index}>
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
        <div className={classes.rootBox}>
          <TotalNumberClinic total={listOfClinics.length} />
          <br />
          <Paper className={classes.paper}>{listOfClinics}</Paper>
        </div>
      </div>
    );
  }
}

ResultsDetails.propTypes = {
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
)(withRouter(withStyles(styles)(ResultsDetails)));
