import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router-dom";
import Menu from "../component/Menu";
import Map from "../component/Map";
import CardEntity from "../component/CardEntity";
import { connect } from "react-redux";
import { selectActiveClinics } from "../store/clinic/reducer";
import addClinics from "../store/clinic/action";
//import * as funClinic from "../store/clinic/action";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      clinicSelected: null
    };
  }

  componentDidMount() {
    this.setState({ list: this.props.mylist });
  }

  handleSelection = clinicId => {
    let listSelected = [];
    this.state.list.forEach(clinic => {
      if (clinic._id === clinicId) {
        this.setState({ clinicSelected: clinic });
        listSelected.push(clinic);
        this.props.addClinics(listSelected);
      }
    });

    this.props.history.push("/clinic-details");
  };

  render() {
    return (
      <div>
        <Menu />
        <Container fluid>
          <Row noGutters>
            <Col xs="6">
              <div style={{ height: "80vh", width: "100%" }}>
                <div style={divStyle}>
                  {this.state.list.map(clinic => {
                    return (
                      <div onClick={() => this.handleSelection(clinic._id)}>
                        <CardEntity
                          title={clinic.name}
                          subtitle={clinic.operatingHours[0]}
                          hours="9:00"
                          categories="cat"
                          url="/#"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col xs="6">
              <Map w={"100%"} h={"80vh"} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("->", selectActiveClinics(state));
  return {
    mylist: selectActiveClinics(state)
  };
};

export default connect(
  mapStateToProps,
  addClinics
)(withRouter(Results));

const divStyle = {
  overflowY: "scroll",
  width: "100%",
  float: "left",
  height: "80vh",
  position: "relative"
};
