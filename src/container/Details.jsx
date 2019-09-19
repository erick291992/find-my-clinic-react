import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Menu from "../component/Menu";
import Map from "../component/Map";
import CardEntity from "../component/CardEntity";
import { connect } from "react-redux";
import { selectActiveClinics } from "../store/clinic/reducer";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.setState({ list: this.props.mylist });
  }

  render() {
    return (
      <div>
        <Menu />
        <Container
          fluid
          style={{ height: "250px", backgroundColor: "red" }}
        ></Container>
        <Container fluid>
          <Row noGutters>
            <Col xs="6">
              <div style={{ height: "80vh", width: "100%" }}>
                <h5></h5>
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

export default connect(mapStateToProps)(Details);

const divStyle = {
  overflowY: "scroll",
  width: "100%",
  float: "left",
  height: "80vh",
  position: "relative"
};
