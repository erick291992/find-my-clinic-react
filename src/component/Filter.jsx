import React, { Component } from "react";
import { Dropdown, DropdownMenu, Button, DropdownToggle } from "reactstrap";
import { withRouter } from "react-router-dom";
import addFilter from "../store/filter/action";
import { connect } from "react-redux";
import {
  HOUSING_CATEGORY,
  CONSUMER_CATEGORY,
  TRUST_STATE_CATEGORY,
  MEDICAL_CATEGORY,
  FAMILY_CATEGORY,
  LEGAL_CATEGORY,
  BUSINESS_CATEGORY,
  REAL_STATE_CATEGORY,
  IMIGRATION_CATEGORY,
  EMPLOYMENT_CATEGORY,
  GENERAL_CATEGORY,
  CRIMINAL_CATEGORY
} from "../utils/constants";
import { removeCategory } from "../utils/utils";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      isHousingActivate: false,
      isConsumerActivate: false,
      isTrustActivate: false,
      isMedicalActivate: false,
      isFamilyActivate: false,
      isLegalActivate: false,
      isBusinessActivate: false,
      isRealActivate: false,
      isCriminal: false,
      isEmployment: false,
      isImigration: false,
      isGeneral: false,

      categoryList: []
    };
    this.handleFilter = this.handleFilter.bind();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleHousing = () => {
    let isHousing = Object.assign({}, this.state.isHousingActivate);

    if (!this.state.isHousingActivate) {
      let copyList = Object.assign([], this.state.categoryList);
      copyList.push(HOUSING_CATEGORY);
      isHousing = true;
      this.setState({ categoryList: copyList, isHousingActivate: isHousing });
    } else {
      isHousing = false;
      let newList = removeCategory(this.state.categoryList, HOUSING_CATEGORY);
      this.setState({ categoryList: newList, isHousingActivate: isHousing });
    }
  };

  handleConsumer = () => {
    let isConsumer = Object.assign({}, this.state.isConsumerActivate);

    if (!this.state.isConsumerActivate) {
      let copyList = Object.assign([], this.state.categoryList);
      copyList.push(CONSUMER_CATEGORY);
      isConsumer = true;
      this.setState({ categoryList: copyList, isConsumerActivate: isConsumer });
    } else {
      isConsumer = false;
      let newList = removeCategory(this.state.categoryList, CONSUMER_CATEGORY);
      this.setState({ categoryList: newList, isConsumerActivate: isConsumer });
    }
  };
  handleFamily = () => {
    let isFamily = Object.assign({}, this.state.isFamilyActivate);

    if (!this.state.isFamilyActivate) {
      let copyList = Object.assign([], this.state.categoryList);
      copyList.push(FAMILY_CATEGORY);
      isFamily = true;
      this.setState({ categoryList: copyList, isFamilyActivate: isFamily });
    } else {
      isFamily = false;
      let newList = removeCategory(this.state.categoryList, FAMILY_CATEGORY);
      this.setState({ categoryList: newList, isConsumerActivate: isFamily });
    }
  };
  handleBusiness = () => {
    let isBusiness = Object.assign({}, this.state.isBusinessActivate);

    if (!this.state.isBusinessActivate) {
      let copyList = Object.assign([], this.state.categoryList);
      copyList.push(BUSINESS_CATEGORY);
      isBusiness = true;
      this.setState({ categoryList: copyList, isBusinessActivate: isBusiness });
    } else {
      isBusiness = false;
      let newList = removeCategory(this.state.categoryList, BUSINESS_CATEGORY);
      this.setState({
        categoryList: newList,
        isBusinessActivate: isBusiness
      });
    }
  };
  handleRealState = () => {
    let isReal = Object.assign({}, this.state.isRealActivate);

    if (!this.state.isRealActivate) {
      let copyList = Object.assign([], this.state.categoryList);
      copyList.push(REAL_STATE_CATEGORY);
      isReal = true;
      this.setState({ categoryList: copyList, isRealActivate: isReal });
    } else {
      isReal = false;
      let newList = removeCategory(
        this.state.categoryList,
        REAL_STATE_CATEGORY
      );
      this.setState({
        categoryList: newList,
        isRealActivate: isReal
      });
    }
  };
  handleImigration = () => {
    let isImigration = Object.assign({}, this.state.isImigrationActivate);

    if (!this.state.isImigrationActivate) {
      let copyList = Object.assign([], this.state.categoryList);
      copyList.push(IMIGRATION_CATEGORY);
      isImigration = true;
      this.setState({
        categoryList: copyList,
        isImigrationActivate: isImigration
      });
    } else {
      isImigration = false;
      let newList = removeCategory(
        this.state.categoryList,
        IMIGRATION_CATEGORY
      );
      this.setState({
        categoryList: newList,
        isImigrationActivate: isImigration
      });
    }
  };
  handleTrust = () => {
    let isTrust = Object.assign({}, this.state.isTrustActivate);

    if (!this.state.isTrustActivate) {
      let copyList = Object.assign([], this.state.categoryList);
      copyList.push(TRUST_STATE_CATEGORY);
      isTrust = true;
      this.setState({ categoryList: copyList, isTrustActivate: isTrust });
    } else {
      isTrust = false;
      let newList = removeCategory(
        this.state.categoryList,
        TRUST_STATE_CATEGORY
      );
      this.setState({ categoryList: newList, isTrustActivate: isTrust });
    }
  };
  handleMedical = () => {
    let isMedical = Object.assign({}, this.state.isMedicalActivate);

    if (!this.state.isMedicalActivate) {
      let copyList = Object.assign([], this.state.categoryList);
      copyList.push(MEDICAL_CATEGORY);
      isMedical = true;
      this.setState({ categoryList: copyList, isMedicalActivate: isMedical });
    } else {
      isMedical = false;
      let newList = removeCategory(this.state.categoryList, MEDICAL_CATEGORY);
      this.setState({ categoryList: newList, isMedicalActivate: isMedical });
    }
  };
  handleLegal = () => {
    let isLegal = Object.assign({}, this.state.isLegalActivate);

    if (!this.state.isLegalActivate) {
      let copyList = Object.assign([], this.state.categoryList);
      copyList.push(LEGAL_CATEGORY);
      isLegal = true;
      this.setState({ categoryList: copyList, isLegalActivate: isLegal });
    } else {
      isLegal = false;
      let newList = removeCategory(this.state.categoryList, LEGAL_CATEGORY);
      this.setState({ categoryList: newList, isLegalActivate: isLegal });
    }
  };
  handleLCriminal = () => {
    let isCriminal = Object.assign({}, this.state.isCriminalActivate);

    if (!this.state.isCriminalActivate) {
      let copyList = Object.assign([], this.state.categoryList);
      copyList.push(CRIMINAL_CATEGORY);
      isCriminal = true;
      this.setState({ categoryList: copyList, isCriminalActivate: isCriminal });
    } else {
      isCriminal = false;
      let newList = removeCategory(this.state.categoryList, CRIMINAL_CATEGORY);
      this.setState({ categoryList: newList, isCriminalActivate: isCriminal });
    }
  };
  handleEmployment = () => {
    let isEmployment = Object.assign({}, this.state.isEmploymentActivate);

    if (!this.state.isEmploymentActivate) {
      let copyList = Object.assign([], this.state.categoryList);
      copyList.push(EMPLOYMENT_CATEGORY);
      isEmployment = true;
      this.setState({
        categoryList: copyList,
        isEmploymentActivate: isEmployment
      });
    } else {
      isEmployment = false;
      let newList = removeCategory(
        this.state.categoryList,
        EMPLOYMENT_CATEGORY
      );
      this.setState({
        categoryList: newList,
        isEmploymentActivate: isEmployment
      });
    }
  };

  handleGeneral = () => {
    let isGeneral = Object.assign({}, this.state.isGeneralActivate);

    if (!this.state.isGeneralActivate) {
      let copyList = Object.assign([], this.state.categoryList);
      copyList.push(GENERAL_CATEGORY);
      isGeneral = true;
      this.setState({ categoryList: copyList, isGeneralActivate: isGeneral });
    } else {
      isGeneral = false;
      let newList = removeCategory(this.state.categoryList, GENERAL_CATEGORY);
      this.setState({ categoryList: newList, isGeneralActivate: isGeneral });
    }
  };

  handleFilter = select => {
    this.props.addFilter(select);
    this.props.history.push("/results");
  };

  render() {
    let buttonHousingActivate = !this.state.isHousingActivate
      ? noActivate
      : activate;
    let buttonTrustActivate = !this.state.isTrustActivate
      ? noActivate
      : activate;
    let buttonConsumerActivate = !this.state.isConsumerActivate
      ? noActivate
      : activate;
    let buttonMedicalActivate = !this.state.isMedicalActivate
      ? noActivate
      : activate;
    let buttonFamilyActivate = !this.state.isFamilyActivate
      ? noActivate
      : activate;
    let buttonLegalActivate = !this.state.isLegalActivate
      ? noActivate
      : activate;
    let buttonBusinessActivate = !this.state.isBusinessActivate
      ? noActivate
      : activate;
    let buttonRealActivate = !this.state.isRealActivate ? noActivate : activate;
    let buttonImigrationActivate = !this.state.isImigrationActivate
      ? noActivate
      : activate;
    let buttonGeneralActivate = !this.state.isGeneralActivate
      ? noActivate
      : activate;
    let buttonCriminalActivate = !this.state.isCriminalActivate
      ? noActivate
      : activate;
    let buttonEmploymentActivate = !this.state.isEmploymentActivate
      ? noActivate
      : activate;

    let isDesktop = true;
    let width = window.innerWidth;

    if (width < 600) {
      isDesktop = false;
    }
    console.log("LIST CATEGORY", this.state.categoryList);
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
                      //style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      style={buttonHousingActivate}
                      color="default"
                      onClick={() => this.handleHousing()}
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
                      //style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      style={buttonTrustActivate}
                      color="default"
                      onClick={() => this.handleTrust()}
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
                      //style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      style={buttonConsumerActivate}
                      color="default"
                      onClick={() => this.handleConsumer()}
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
                      //style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      style={buttonMedicalActivate}
                      color="default"
                      onClick={() => this.handleMedical()}
                    >
                      Medical
                    </Button>
                  </th>
                </tr>
                <tr>
                  <th style={marginRight}>
                    <Button
                      //style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      style={buttonFamilyActivate}
                      color="default"
                      onClick={() => this.handleFamily()}
                    >
                      Family
                    </Button>
                  </th>
                  <th style={marginLeft}>
                    <Button
                      //style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      style={buttonLegalActivate}
                      color="default"
                      onClick={() => this.handleLegal()}
                    >
                      Legal Procedure
                    </Button>
                  </th>
                </tr>
                <tr>
                  <th style={marginRight}>
                    <Button
                      //style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      style={buttonBusinessActivate}
                      color="default"
                      onClick={() => this.handleBusiness()}
                    >
                      Business
                    </Button>
                  </th>
                  <th style={marginLeft}>
                    <Button
                      //style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      style={buttonCriminalActivate}
                      color="default"
                      onClick={() => this.handleLCriminal()}
                    >
                      Criminal
                    </Button>
                  </th>
                </tr>
                <tr>
                  <th style={marginRight}>
                    <Button
                      //style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      style={buttonRealActivate}
                      color="default"
                      onClick={() => this.handleRealState()}
                    >
                      Real State
                    </Button>
                  </th>
                  <th style={marginLeft}>
                    <Button
                      //style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      style={buttonEmploymentActivate}
                      color="default"
                      onClick={() => this.handleEmployment()}
                    >
                      Employment
                    </Button>
                  </th>
                </tr>
                <tr>
                  <th style={marginRight}>
                    <Button
                      //style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      style={buttonImigrationActivate}
                      color="default"
                      onClick={() => this.handleImigration()}
                    >
                      Inmigration
                    </Button>
                  </th>
                  <th style={marginLeft}>
                    <Button
                      //style={isDesktop ? buttonStyleDesktop : buttonStyleMovil}
                      style={buttonGeneralActivate}
                      color="default"
                      onClick={() => this.handleGeneral()}
                    >
                      General
                    </Button>
                  </th>
                </tr>
              </table>
              <br />
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

const activate = {
  border: "1px solid #3498DB",
  width: "100%"
};
const noActivate = {
  border: "1px solid #000000",
  width: "100%"
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
