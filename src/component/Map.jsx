import React, { Component } from "react";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import BaseMap from "../component/BaseMap";

const WrapperMap = withScriptjs(withGoogleMap(BaseMap));

class Map extends Component {
  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>
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
