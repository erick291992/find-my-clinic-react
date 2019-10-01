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
import { addClinics, addSingleClinic } from "../../store/clinic/action";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Footer from "../../component/Footer";

import {
  getFilterList,
  saveSelectedClinic,
  getSelectedClinic,
  reOrderList
} from "../../utils/utils";
import { getClinics, getFilteredClinics } from "../../service/clinicService";

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

  loadClinics = () => {
    const res = getFilteredClinics();
    res.then(clinicsList => {
      this.setState({ list: clinicsList });
    });
  };

  componentDidMount() {
    this.loadClinics();
  }

  componentDidUpdate() {
    console.log("update!");
    //this.loadClinics();
  }

  handleSelection = clinicId => {
    console.log("Click  ", clinicId);
    console.log("List: ", this.state.list);
    let listSelected = [];
    this.state.list.forEach(clinic => {
      console.log(clinic._id);
      if (clinic._id === clinicId) {
        console.log("Click2");
        this.setState({ clinicSelected: clinic });
        listSelected.push(clinic);
        saveSelectedClinic(listSelected);
        this.props.addSingleClinic(listSelected);
      }
    });

    this.props.history.push("/clinic-details");
  };

  render() {
    const { classes } = this.props;
    let showList = window.innerWidth < 600 ? showListStyle : hideListStyle;
    let clinics = this.state.list;

    let selected = getSelectedClinic() != null ? getSelectedClinic() : null; //this.props.clinic;
    console.log("selected : ", selected);
    let listOfClinics = "";
    let listForMap = [];
    if (selected != null) {
      let listForMap = reOrderList(selected[0], this.state.list);
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
              categories={clinic.searchCategories.toString()}
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
              <Map w={"100%"} h={"70vh"} list={clinics} />
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
//export default withRouter(withStyles(styles)(Results));
export default connect(
  mapStateToProps,
  { addClinics, addSingleClinic }
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
