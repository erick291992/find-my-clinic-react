import React, { Component } from "react";
import addClinics from "../store/clinic/action";
import { connect } from "react-redux";
import Map from "../component/Map";
import { getClinics } from "../service/clinicService";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const res = getClinics();
    res.then(clinicsList => {
      this.props.addClinics(clinicsList);
    });
  }

  render() {
    return (
      <div>
        <Map w={"100vw"} h={"84vh"} />
      </div>
    );
  }
}

export default connect(
  null,
  addClinics
)(Home);
