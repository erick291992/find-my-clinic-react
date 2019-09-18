import React, { Component } from "react";
import {
  Dropdown,
  DropdownMenu,
  Label,
  Button,
  Input,
  DropdownToggle
} from "reactstrap";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { browserHistory } from "react-router";
import createHistory from "history/createBrowserHistory";
import addFilter from "../store/filter/action";
import { connect } from "react-redux";
import { relative } from "path";
import { changeTo } from "../utils/utils";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
    this.handleFilter = this.handleFilter.bind();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleFilter = select => {
    this.props.addFilter(select);
    //changeTo("results");
    this.props.history.push("/results");
  };

  render() {
    let isDesktop = true;
    let width = window.innerWidth;

    if (width < 600) {
      isDesktop = false;
    }
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            outline
            style={{ width: "50%" }}
            color="secondary"
            tag="span"
            onClick={this.toggle}
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <Button style={buttonStyle} outline style={{ width: "100%" }}>
              <img
                src="../icons/search.png"
                width="18px"
                height="18px"
                style={{ marginRight: "10px" }}
              />
              What can we help you with?
            </Button>
          </DropdownToggle>
          <DropdownMenu
            style={isDesktop ? dropDwonSmallDesktop : dropDwonSmallDevice}
          >
            <div>
              <p>Select All that apply</p>
              <table>
                <tr>
                  <th style={marginRight}>
                    <Button
                      style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      color="default"
                    >
                      Housing
                      <img
                        src="../icons/Shape.png"
                        width="18px"
                        height="18px"
                        style={{ marginLeft: "10px" }}
                      />
                    </Button>
                  </th>
                  <th style={marginLeft}>
                    <Button
                      style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      color="default"
                    >
                      Trust & States
                      <img
                        src="../icons/shape 7.png"
                        width="18px"
                        height="18px"
                        style={{ marginLeft: "10px" }}
                      />
                    </Button>
                  </th>
                </tr>
                <tr>
                  <th style={marginRight}>
                    <Button
                      style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      color="default"
                    >
                      Consumer
                      <img
                        src="../icons/shape 2.png"
                        width="18px"
                        height="18px"
                        style={{ marginLeft: "10px" }}
                      />
                    </Button>
                  </th>
                  <th style={marginLeft}>
                    <Button
                      style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      color="default"
                    >
                      Medical
                    </Button>
                  </th>
                </tr>
                <tr>
                  <th style={marginRight}>
                    <Button
                      style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      color="default"
                    >
                      Family
                    </Button>
                  </th>
                  <th style={marginLeft}>
                    <Button
                      style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      color="default"
                    >
                      Legal Procedure
                    </Button>
                  </th>
                </tr>
                <tr>
                  <th style={marginRight}>
                    <Button
                      style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      color="default"
                    >
                      Business
                    </Button>
                  </th>
                  <th style={marginLeft}>
                    <Button
                      style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      color="default"
                    >
                      Criminal
                    </Button>
                  </th>
                </tr>
                <tr>
                  <th style={marginRight}>
                    <Button
                      style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      color="default"
                    >
                      Real State
                    </Button>
                  </th>
                  <th style={marginLeft}>
                    <Button
                      style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      color="default"
                    >
                      Employment
                    </Button>
                  </th>
                </tr>
                <tr>
                  <th style={marginRight}>
                    <Button
                      style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      color="default"
                    >
                      Inmigration
                    </Button>
                  </th>
                  <th style={marginLeft}>
                    <Button
                      style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      color="default"
                    >
                      General
                    </Button>
                  </th>
                </tr>
              </table>
              <br />
              <p>What is your zip code</p>
              <center>
                <Button
                  style={{ width: "50%", marginTop: "10px" }}
                  outline
                  onClick={this.handleFilter}
                  color="secondary"
                >
                  Search
                </Button>
              </center>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default connect(
  null,
  { addFilter }
)(withRouter(Filter));

const buttonStyle = {
  padding: "5px",
  width: "200px",
  height: "60px",
  padding: "5px 10px"
};
const buttonStyleDesktop = {
  padding: "5px",
  width: "200px",
  height: "60px",
  padding: "5px 10px",
  border: "1px solid black"
};
const buttonStyleMovil = {
  padding: "5px",
  width: "120px",
  height: "60px",
  padding: "5px 10px",
  border: "1px solid black",
  fontSize: "8px"
};

const marginLeft = {
  paddingLeft: "20px"
};

const marginRight = {
  paddingRight: "20px"
};

const dropDwonSmallDevice = {
  width: "100vw",
  height: "100vh",
  padding: "10%"
};

const dropDwonSmallDesktop = {
  padding: "10%"
};
