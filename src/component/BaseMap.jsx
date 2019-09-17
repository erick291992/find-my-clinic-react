import React, { Component } from "react";
import { connect } from "react-redux";
import { selectActiveClinics } from "../store/clinic/reducer";
import { GoogleMap, Marker } from "react-google-maps";
import { getClinics } from "../service/clinicService";

const mapStateToProps = state => {
  return {
    clients: selectActiveClinics(state)
  };
};

class BaseMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let list = this.clients;
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 40.725288, lng: -74.007854 }}
      >
        {list.map(clinic => {
          return <Marker key={clinic._id} position={clinic.location} />;
        })}
      </GoogleMap>
    );
  }
}

export default connect(this.mapStateToProps)(BaseMap);
// export default BaseMap;
