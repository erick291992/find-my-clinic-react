import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import CardEntity from "../../component/CardEntity";
import { connect } from "react-redux";
import { selectActiveClinics } from "../../store/clinic/reducer";
import { addClinics } from "../../store/clinic/action";
import { getFilteredClinics } from "../../service/clinicService";
import {
  saveSelectedClinic,
  getSelectedClinic,
  reOrderList
} from "../../utils/utils";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "98%",
    margin: "0px"
  },
  paper: {
    width: "100%",
    textAlign: "left",
    margin: "0px"
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
      this.setState({ list: clinicsList });
    });
  };

  componentDidMount() {
    this.loadClinics();
  }

  // reOrderList = clinic => {
  //   let newList = [];
  //   newList.push(clinic);

  //   this.state.list.forEach(lis => {
  //     if (clinic._id != lis._id) {
  //       newList.push(lis);
  //     }
  //   });
  //   return newList;
  // };

  handleSelection = clinicId => {
    let listSelected = [];
    this.state.list.forEach(clinic => {
      console.log(clinic._id);
      if (clinic._id === clinicId) {
        console.log("Click2");
        this.setState({ clinicSelected: clinic });
        listSelected.push(clinic);
        saveSelectedClinic(listSelected);
      }
    });
    this.props.history.push("/clinic-details");
  };

  render() {
    const { classes } = this.props;
    let clinics = this.state.list;
    console.log(this.state.list.length);

    let selected = getSelectedClinic() ? getSelectedClinic() : null; //this.props.clinic;
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
              active={selected._id === clinic._id ? true : false}
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
        <div style={divStyle}>
          <Paper className={classes.paper}>
            {/* {this.state.list.map(clinic => {
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
            })} */}
            {listOfClinics}
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
