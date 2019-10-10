import React, { Component } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
import BaseMap from "../component/BaseMap";

// function myMap(clinics) {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 40.725288, lng: -74.007854 }}
//     >
//       {clinics.map(clinic => {
//         return <Marker key={clinic._id} position={clinic.location} />;
//       })}
//     </GoogleMap>
//   );
// // }
// const WrapperMap = withScriptjs(withGoogleMap());

const WrapperMap = withScriptjs(withGoogleMap(BaseMap));

class Map extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   clinics: []
    // };
  }

  render() {
    return (
      <div style={{ width: this.props.w, height: this.props.h, zIndex: "-1" }}>
        <WrapperMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          clinics={this.props.list}
          zoom={this.props.z}
        />
      </div>
    );
  }
}
export default Map;
