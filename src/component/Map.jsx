import React, { Component } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
import BaseMap from "../component/BaseMap";

const WrapperMap = withScriptjs(withGoogleMap(BaseMap));

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let width = window.innerWidth;
    let styleMap = width < 600 ? hightMovil : hightDesktop;

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

const hightMovil = {
  width: "100%",
  height: "calc(100vh - 250px)",
  zIndex: "-1"
};
const hightDesktop = {
  width: "100%",
  height: "calc(100vh - 170px)",
  zIndex: "-1"
};
