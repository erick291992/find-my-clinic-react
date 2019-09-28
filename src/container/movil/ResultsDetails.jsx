import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import CardEntity from "../../component/CardEntity";
import { connect } from "react-redux";
import { selectActiveClinics } from "../../store/clinic/reducer";
import addClinics from "../../store/clinic/action";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "98%",
    margin: "0px"
  },
  paper: {
    width: "100%",
    textAlign: "center",
    margin: "0px"
  }
});

class ResultsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  componentDidMount() {
    this.setState({ list: this.props.mylist });
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

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div style={divStyle}>
          <Paper className={classes.paper}>
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
          </Paper>
        </div>
      </div>
    );
  }
}

ResultsDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log("->", selectActiveClinics(state));
  return {
    mylist: selectActiveClinics(state)
  };
};

export default connect(
  mapStateToProps,
  addClinics
)(withRouter(withStyles(styles)(ResultsDetails)));

const divStyle = {
  overflowY: "scroll",
  height: "70vh",
  margin: 0
};
