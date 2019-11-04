import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectFilteredClinics } from "../store/clinic/reducer";
import { addFiltered } from "../store/clinic/action";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { saveSelectedClinic, getSelectedClinic } from "../utils/utils";

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

  getBestEpicenter = list => {
    let ramNumber = Math.floor(Math.random() * list.length);
    let result = list[ramNumber].location;
    return result;
  };

  render() {
    let list = this.props.clinics;
    let actualEpiCenter = null;
    if (getSelectedClinic()) {
      actualEpiCenter = getSelectedClinic()[0].location;
    } else {
      actualEpiCenter =
        this.props.mylistfiltered.length > 0
          ? this.props.mylistfiltered[0].location
          : epiCenter;
    }

    let width = window.innerWidth;
    let path = "";
    let zoomValue = 0;
    if (width < 600) {
      path = "/clinics";
      zoomValue = 14;
    } else {
      path = "/results";
      zoomValue = 12;
    }

    return (
      <GoogleMap
        defaultZoom={this.props.zoom ? this.props.zoom : zoomValue}
        defaultCenter={actualEpiCenter}
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
