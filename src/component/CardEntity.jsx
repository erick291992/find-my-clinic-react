import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class CardEntity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container
        style={{
          padding: "1% 4% 1% 2%",
          width: "94%"
        }}
        onClick={() => this.handleSelection}
      >
        <Row style={cardDescriptionStyleActive}>
          <Col xs="4">
            <img src={this.props.url} />
          </Col>
          <Col xs="8">
            <div>
              <h5>{this.props.title}</h5>
              <label>{this.props.subtitle}</label>
              <br />
              <label>{this.props.hours}</label>
              <br />
              <label>{this.props.categories}</label>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CardEntity;

const cardDescriptionStyleActive = {
  padding: "3%",
  backgroundColor: "#F4F6F6",
  border: "1px solid #000000",
  borderRadius: "5px"
};

const cardDescriptionStyleNoActive = {
  padding: "3%",
  backgroundColor: "#FFFFFF"
};
