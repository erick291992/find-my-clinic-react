import React, { Component } from "react";
import { addClinics } from "../store/clinic/action";
import { connect } from "react-redux";
import Map from "../component/Map";
import { getClinics } from "../service/clinicService";
import Footer from "../component/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadClinics();
    // const res = getClinics();
    // res.then(clinicsList => {
    //   this.props.addClinics(clinicsList);
    // });
  }

  loadClinics = () => {
    const res = getClinics();
    res.then(clinicsList => {
      this.props.addClinics(clinicsList);
    });
  };

  render() {
    this.loadClinics();
    let width = window.innerWidth;
    let heightMap = width < 600 ? "64vh" : "74vh";
    return (
      <div>
        <Map w={"100vw"} h={heightMap} />
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  { addClinics }
)(Home);
