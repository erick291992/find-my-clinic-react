import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import { getFilteredClinics } from "../service/clinicService";
import { addFiltered } from "../store/clinic/action";
import { connect } from "react-redux";
import {
  removeCategory,
  saveFilters,
  saveZipcode,
  cleanFilterStorage
} from "../utils/utils";
import { getCategories } from "../service/clinicService";
import { selectFilteredClinics } from "../store/clinic/reducer";

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

class Filter extends Component {
  constructor(props) {
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
      categories: [],
      categoriesSelected: [],
      zipcode: null,
      open: false,

      categoryList: [],
      isActive: false
    };
    this.handleFilter = this.handleFilter.bind();
  }

  componentDidMount() {
    let res = getCategories();
    res.then(category => {
      this.setState({ categories: category });
    });
  }

  handleClickOpen = () => {
    cleanFilterStorage();
    this.setState({ open: true });
  };

  handleClose = () => {
    this.cleanStates();
    this.setState({ open: false });
  };

  cleanStates = () => {
    this.setState({
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
      categoriesSelected: [],
      open: false
    });
  };

  loadClinics = () => {
    const res = getFilteredClinics();
    res.then(clinicsList => {
      this.props.addFiltered(clinicsList);
    });
  };

  handleFilter = () => {
    this.cleanStates();
    saveFilters(this.state.categoriesSelected);
    saveZipcode(this.state.zipcode);
    this.loadClinics();
    this.props.history.push("/results");
    this.handleClose();
  };

  handleZipcode = event => {
    console.log("handle zipcode");
    let zip = Object.assign({}, this.state.zipcode);
    zip = event.target.value;
    this.setState({ zipcode: zip });
  };

  handleFilterSelection = selection => {
    let categories = Object.assign([], this.state.categoriesSelected);

    if (categories.includes(selection) === true) {
      let newlist = removeCategory(categories, selection);
      categories = newlist;
    } else {
      categories.push(selection);
    }
    this.setState({ categoriesSelected: categories });
  };

  render() {
    let bannerSelectedCategories = this.state.categoriesSelected;
    let isFullScreen = window.innerWidth < 600 ? true : false;

    return (
      <div>
        <center>
          <Button variant="outlined" onClick={this.handleClickOpen}>
            <label style={{ color: "#A6ACAF" }}>
              What can we help you with?
            </label>
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
              <Typography variant="subtitle2" gutterBottom>
                {bannerSelectedCategories.toString()}
              </Typography>
              <center>
                <table>
                  {this.state.categories.map(cate => {
                    return (
                      <Button
                        key={cate._id}
                        variant={"contained"}
                        style={buttonStyle}
                        color="default"
                        onClick={() => this.handleFilterSelection(cate.name)}
                      >
                        {cate.name}
                        {cate.image ? (
                          <img
                            src={cate.image}
                            width="18px"
                            height="18px"
                            style={{ marginLeft: "10px" }}
                          />
                        ) : (
                          ""
                        )}
                      </Button>
                    );
                  })}
                </table>
                <div style={{ textAlign: "left", marginLeft: "8px" }}>
                  <TextField
                    id="filled-number"
                    placeholder="ZIPCODE"
                    type="number"
                    value={this.state.zipcode}
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                    onChange={this.handleZipcode}
                  />
                </div>
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
  { addFiltered }
)(withRouter(Filter));

const buttonStyle = {
  border: "1px solid #000000",
  width: "48%",
  margin: "1%"
};
