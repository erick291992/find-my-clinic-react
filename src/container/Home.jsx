import React, { Component } from "react";
import addClinics from "../store/clinic/action";
import { connect } from "react-redux";
import Map from "../component/Map";
import Filter from "../component/Filter";
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
    let width = window.innerWidth;
    let filterSmallDevice = "";
    if (width < 600) {
      filterSmallDevice = <Filter />;
    }
    return <div></div>;
  }
}

export default connect(
  null,
  addClinics
)(Home);
