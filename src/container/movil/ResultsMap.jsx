import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Map from "../../component/Map";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import {
  selectFilteredClinics,
  selectActiveClinics
} from "../../store/clinic/reducer";
import { addClinics, addFiltered } from "../../store/clinic/action";
import { addFilter, removeFilter } from "../../store/filter/action";
import { withStyles, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { getFilteredClinics } from "../../service/clinicService";
import { cleanFilterStorage } from "../../utils/utils";
import TotalNumberClinic from "../../component/TotalNumberClinic";

const styles = theme => ({
  root: {
    width: "100%",
    height: "calc(100vh - 250px)",
    paddingTop: "25px"
  },
  rootMap: {
    width: "100%",
    height: "calc(100vh - 328px)",
    marginTop: "28px"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    margin: "0px",
    height: "50px"
  },
  buttonAction: {
    width: "45%",
    margin: "2.5%",
    padding: "5px",
    fontSize: "10px",
    cursor: "pointer",
    color: "#000000",
    backgroundColor: "#A6ACAF"
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

  loadClinics = () => {
    const res = getFilteredClinics();
    res.then(clinicsList => {
      this.props.addFiltered(clinicsList);
    });
  };

  componentDidMount() {
    this.loadClinics();
  }

  removeAllFilters = () => {
    cleanFilterStorage();
    this.props.removeFilter();
    this.props.history.push("/");
  };

  showResultSearch = () => {
    this.props.history.push("/clinics");
  };

  render() {
    const { classes } = this.props;
    let list =
      this.props.mylistfiltered > 0
        ? this.props.mylistfiltered
        : this.props.myclinics;
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <Button
                  className={classes.buttonAction}
                  variant={"contained"}
                  onClick={() => this.removeAllFilters()}
                >
                  Remove All filters
                </Button>
                <Button
                  className={classes.buttonAction}
                  variant={"contained"}
                  onClick={() => this.showResultSearch()}
                >
                  See list of search results
                </Button>
              </div>
              <TotalNumberClinic total={list.length} />
            </Paper>
            <div className={classes.rootMap}>
              <Map list={list} />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylistfiltered: selectFilteredClinics(state),
    myclinics: selectActiveClinics(state)
  };
};

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { addFiltered, removeFilter }
)(withRouter(withStyles(styles)(Results)));
