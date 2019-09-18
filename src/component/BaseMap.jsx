import React, { Component } from "react";
import { connect } from "react-redux";
import { selectActiveClinics } from "../store/clinic/reducer";
import { GoogleMap, Marker } from "react-google-maps";
import { getClinics } from "../service/clinicService";

class BaseMap extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  componentDidMount() {
    // const res = getClinics();
    // res.then(clinicsList => {
    //   this.setState({ list: clinicsList });
    // });

    this.setState({ list: this.props.mylist });
  }

  render() {
    let list = this.state.list;
    console.log(this.props.mylist);
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

const mapStateToProps = state => {
  console.log("->", selectActiveClinics(state));
  return {
    mylist: selectActiveClinics(state)
  };
};

export default connect(mapStateToProps)(BaseMap);
//export default BaseMap;
