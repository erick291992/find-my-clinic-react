import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  selectActiveClinics,
  selectFilteredClinics
} from "../store/clinic/reducer";
import { addClinics, clinicSelected } from "../store/clinic/action";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { getClinics } from "../service/clinicService";
import { thisExpression } from "@babel/types";

class BaseMap extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], selectedClinic: null };
  }

  loadClinics = () => {
    //this.setState({ list: this.props.mylist });
    // if (this.props.mylist.length === 0) {
    //   let res = getClinics();
    //   res.then(clinics => {
    //     this.setState({ list: clinics });
    //   });
    // } else {
    //   this.setState({ list: this.props.mylist });
    // }
  };

  componentDidMount() {
    const res = getClinics();
    res.then(clinicsList => {
      this.props.addClinics(clinicsList);
    });
    //this.loadClinics();
    //this.setState({ list: this.props.mylist });
    // if (this.props.mylist.length === 0) {
    //   let res = getClinics();
    //   res.then(clinics => {
    //     this.setState({ list: clinics });
    //   });
    // } else {
    //   this.setState({ list: this.props.mylist });
    // }
  }

  handleSelectedClinic = (clinic, path) => {
    this.props.clinicSelected(clinic);
    this.setState({ selectedClinic: clinic });
    this.props.history.push(path);
  };
  handleSelectedClose = () => {
    this.setState({ selectedClinic: null });
  };

  render() {
    let list =
      this.props.mylistfiltered != null
        ? this.props.mylistfiltered
        : this.props.mylist;
    console.log("reciving clinic on map base:");
    console.log("-------------------");
    console.log(list.length);
    let width = window.innerWidth;
    let path = width < 600 ? "/clinics" : "/results";

    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 40.725288, lng: -74.007854 }}
      >
        {list.map(clinic => {
          return (
            <Marker
              key={clinic._id}
              position={clinic.location}
              onClick={() => {
                this.handleSelectedClinic(clinic, path);
              }}
            />
          );
        })}

        {this.state.selectedClinic && (
          <InfoWindow
            position={this.state.selectedClinic.location}
            onCloseClick={() => this.handleSelectedClose()}
          >
            <div>
              <h5>{this.state.selectedClinic.name}</h5>
              <p>
                {/* <lable>Address: </lable>
                {this.state.selectedClinic.address}
                <br />
                <lable>Openning: </lable>
                {this.state.selectedClinic.operatingHours}
                <br />
                <lable>Phone: </lable>
                {this.state.selectedClinic.phone}
                <br /> */}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylist: selectActiveClinics(state),
    mylistfiltered: selectFilteredClinics(state)
  };
};

export default connect(
  mapStateToProps,
  { clinicSelected, addClinics }
)(withRouter(BaseMap));
