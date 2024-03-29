import React, { Component } from "react";
import { addClinics } from "../store/clinic/action";
import { connect } from "react-redux";
import Map from "../component/Map";
import { getClinics } from "../service/clinicService";

class Home extends Component {
  mounted = false;
  constructor(props) {
    super(props);
    this.state = {
      clinics: []
    };
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  componentDidMount() {
    this.mounted = true;
    if (this.mounted) {
      this.loadClinics();
    }
  }

  loadClinics = () => {
    const res = getClinics();
    res.then(clinicsList => {
      this.setState({ clinics: clinicsList });
      this.props.addClinics(clinicsList);
    });
  };

  render() {
    let width = window.innerWidth;
    let sizeContent = width < 600 ? hightMovil : hightDesktop;
    return (
      <div style={sizeContent}>
        <Map list={this.state.clinics} />
      </div>
    );
  }
}

export default connect(
  null,
  { addClinics }
)(Home);

const hightMovil = {
  width: "100%",
  height: "calc(100vh - 250px)"
  //zIndex: "-1"
};
const hightDesktop = {
  width: "100%",
  height: "calc(100vh - 170px)"
  //zIndex: "-1"
};
