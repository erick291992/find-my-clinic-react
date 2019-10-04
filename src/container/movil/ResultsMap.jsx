import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Map from "../../component/Map";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { selectFilteredClinics } from "../../store/clinic/reducer";
import { addClinics, addFiltered } from "../../store/clinic/action";
import { withStyles, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import Footer from "../../component/Footer";
import { getFilteredClinics } from "../../service/clinicService";
import { cleanFilterStorage } from "../../utils/utils";

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
  },
  buttonAction: {
    width: "45%",
    margin: "2.5%",
    padding: "5px",
    fontSize: "8px",
    cursor: "pointer",
    color: "#FFFFFF",
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
    this.props.history.push("/");
  };

  showResultSearch = () => {
    this.props.history.push("/clinics");
  };

  render() {
    const { classes } = this.props;
    let list = this.props.mylistfiltered;
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
              <Map w={"100%"} h={"60vh"} list={list} />
              <Footer />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylistfiltered: selectFilteredClinics(state)
  };
};

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { addFiltered }
)(withRouter(withStyles(styles)(Results)));
