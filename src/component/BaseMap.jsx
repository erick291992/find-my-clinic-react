import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectFilteredClinics } from "../store/clinic/reducer";
import { addFiltered } from "../store/clinic/action";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { saveSelectedClinic } from "../utils/utils";

const epiCenter = { lat: 40.725288, lng: -74.007854 };

class BaseMap extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], selectedClinic: null };
  }

  handleSelectedClinic = (clinic, path) => {
    let list = [];
    list.push(clinic);
    saveSelectedClinic(list);

    this.setState({ selectedClinic: clinic });
    this.props.history.push(path);
  };
  handleSelectedClose = () => {
    this.setState({ selectedClinic: null });
  };

  getEpiCenter = () => {};

  render() {
    let actualEpiCenter =
      this.props.mylistfiltered.length > 0
        ? this.props.mylistfiltered[0].location
        : epiCenter;
    let list = this.props.clinics;
    let width = window.innerWidth;
    let path = width < 600 ? "/clinics" : "/results";
    console.log("Epicenter for Map : ", actualEpiCenter);

    return (
      <GoogleMap defaultZoom={10} defaultCenter={actualEpiCenter}>
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
    mylistfiltered: selectFilteredClinics(state)
  };
};

export default connect(
  mapStateToProps,
  { addFiltered }
)(withRouter(BaseMap));
