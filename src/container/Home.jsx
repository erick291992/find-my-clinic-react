import React, { Component } from "react";
import { addClinics } from "../store/clinic/action";
import { connect } from "react-redux";
import Map from "../component/Map";
import { getClinics } from "../service/clinicService";
import Footer from "../component/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clinics: []
    };
  }

  componentDidMount() {
    this.loadClinics();
  }

  loadClinics = () => {
    console.log("home");
    const res = getClinics();
    res.then(clinicsList => {
      this.setState({ clinics: clinicsList });
      this.props.addClinics(clinicsList);
    });
  };

  render() {
    let width = window.innerWidth;
    let heightMap = width < 600 ? "64vh" : "74vh";
    return (
      <div>
        <Map w={"100vw"} h={heightMap} list={this.state.clinics} />
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  { addClinics }
)(Home);
