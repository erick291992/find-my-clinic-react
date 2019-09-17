import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  NavLink,
  ModalFooter,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} style={{ cursor: "pointer" }}>
          Sign Up For Updates
        </NavLink>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Want to receive updates
            <br /> about our site?
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Col sm={12}>
                  <Input type="text" name="name" id="name" placeholder="Name" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={12}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={12}>
                  <center>
                    <p style={termStyle}>
                      By providing my name and email, you agree to
                      <br />
                      Legalforall’s Terms of Service and Privacy Policy
                    </p>
                  </center>
                </Col>
                <Col sm={12}>
                  <center>
                    <Button
                      color="default"
                      style={submitStyle}
                      onClick={this.toggle}
                    >
                      Sign Up
                    </Button>
                  </center>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Signup;

const termStyle = {
  fontSize: "10px",
  margin: "10px 0px"
};

const submitStyle = {
  border: "1px solid #000000",
  padding: "5px 15px"
};
