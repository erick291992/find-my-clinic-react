import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
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

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

class Filter2 extends Component {
  constructor(props, anchorEl, setAnchorEl) {
    super(props);

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
      categoryList: [],
      open: false
    };
    this.handleFilter = this.handleFilter.bind();
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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

    console.log("LIST CATEGORY", this.state.categoryList);
    let popupStyle =
      window.innerWidth < 600 ? dropDwonSmallDevice : dropDwonDesktop;
    let isFullScreen = window.innerWidth < 600 ? true : false;
    return (
      <div>
        <center>
          <Button
            variant="outlined"
            color="default"
            onClick={this.handleClickOpen}
          >
            What can we help you with?
          </Button>
        </center>

        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
          fullScreen={isFullScreen}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Select All that apply
          </DialogTitle>
          <DialogContent dividers>
            <div>
              <center>
                <table>
                  <tr>
                    <th style={marginRight}>
                      <Button
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
                        style={buttonFamilyActivate}
                        color="default"
                        onClick={() => this.handleFamily()}
                      >
                        Family
                      </Button>
                    </th>
                    <th style={marginLeft}>
                      <Button
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
                        style={buttonBusinessActivate}
                        color="default"
                        onClick={() => this.handleBusiness()}
                      >
                        Business
                      </Button>
                    </th>
                    <th style={marginLeft}>
                      <Button
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
                        style={buttonRealActivate}
                        color="default"
                        onClick={() => this.handleRealState()}
                      >
                        Real State
                      </Button>
                    </th>
                    <th style={marginLeft}>
                      <Button
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
                        style={buttonImigrationActivate}
                        color="default"
                        onClick={() => this.handleImigration()}
                      >
                        Inmigration
                      </Button>
                    </th>
                    <th style={marginLeft}>
                      <Button
                        style={buttonGeneralActivate}
                        color="default"
                        onClick={() => this.handleGeneral()}
                      >
                        General
                      </Button>
                    </th>
                  </tr>
                </table>
              </center>
              <br />
              <center>
                <Button
                  style={{
                    width: "50%",
                    marginTop: "10px",
                    border: "1px solid #000000"
                  }}
                  outline
                  onClick={this.handleFilter}
                >
                  Search
                </Button>
              </center>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  null,
  { addFilter }
)(withRouter(Filter2));

const activate = {
  border: "1px solid #3498DB",
  width: "100%"
};
const noActivate = {
  border: "1px solid #000000",
  width: "100%"
};

const marginLeft = {
  paddingLeft: "20px"
};

const marginRight = {
  paddingRight: "20px"
};

const dropDwonSmallDevice = {
  padding: "5%",
  width: "100vw",
  height: "100vh"
};

const dropDwonDesktop = {
  padding: "5%"
};

const buttonSearchStyle = {
  width: "100%",
  border: "1px solid #000000"
};