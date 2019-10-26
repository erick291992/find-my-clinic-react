import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import SearchIcon from "@material-ui/icons/Search";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import { getFilteredClinics, getClinics } from "../service/clinicService";
import { addFiltered, addClinics } from "../store/clinic/action";
import { selectActiveFilter } from "../store/filter/reducer";
import { addFilter, removeFilter } from "../store/filter/action";
import { connect } from "react-redux";
import {
  removeCategory,
  saveFilters,
  saveZipcode,
  cleanFilterStorage
} from "../utils/utils";
import { getCategories } from "../service/clinicService";

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
  },
  buttonSearch: { width: "100%" },
  buttonUnFilter: { width: "100%", marginTop: "4px" },
  buttonText: {
    color: "#A6ACAF"
  },
  buttonTextActivate: {
    color: "#F08080"
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

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      categories: [],
      categoriesSelected: [],
      zipcode: "",
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
    this.setState({ open: false });
  };

  loadClinics = () => {
    if (this.props.myfilters.length === 0 && this.state.zipcode === null) {
      const res = getClinics();
      res.then(clinicsList => {
        this.props.addFiltered(clinicsList);
        this.props.addClinics(clinicsList);
      });
    } else {
      const res = getFilteredClinics();
      res.then(clinicsList => {
        this.props.addFiltered(clinicsList);
        this.props.addClinics(clinicsList);
      });
    }
  };

  handleFilter = () => {
    saveFilters(this.props.myfilters);
    saveZipcode(this.state.zipcode);
    this.loadClinics();
    this.props.history.push("/results");
    this.handleClose();
  };

  handleNoFilter = () => {
    this.props.removeFilter();
    cleanFilterStorage();
    this.setState({ categoriesSelected: [], zipcode: null });
    const res = getClinics();
    res.then(clinicsList => {
      this.props.addFiltered(clinicsList);
      this.props.addClinics(clinicsList);
      this.props.history.push("/results");
    });
  };

  handleZipcode = event => {
    let zip = Object.assign({}, this.state.zipcode);
    zip = event.target.value;
    this.setState({ zipcode: zip });
  };

  handleFilterSelection = selection => {
    let categories = this.props.myfilters;

    if (categories.includes(selection) === true) {
      let newlist = removeCategory(categories, selection);
      categories = newlist;
    } else {
      categories.push(selection);
    }
    this.props.addFilter(categories);
    this.setState({ categoriesSelected: categories });
  };

  render() {
    const { classes } = this.props;
    let bannerSelectedCategories = this.state.categoriesSelected;
    let isFullScreen = window.innerWidth < 600 ? true : false;

    return (
      <div>
        <center>
          <Button
            variant="outlined"
            className={classes.buttonSearch}
            color={this.props.myfilters.length > 0 ? "secondary" : "default"}
            onClick={this.handleClickOpen}
          >
            <SearchIcon />
            <label
              className={
                this.props.myfilters.length > 0
                  ? classes.buttonTextActivate
                  : classes.buttonText
              }
            >
              What can we help you with?
            </label>
          </Button>
          <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonUnFilter}
            onClick={() => this.handleNoFilter()}
          >
            Remove Filters
          </Button>
        </center>

        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
          fullScreen={isFullScreen}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Select all that apply
          </DialogTitle>
          <DialogContent dividers>
            <div>
              <Typography variant={"subtitle2"} gutterBottom>
                {bannerSelectedCategories.join(" , ")}
              </Typography>
              <center>
                {/* <table> */}
                {this.state.categories.map(cate => {
                  return (
                    <Button
                      key={cate._id}
                      variant="contained"
                      style={buttonStyle}
                      onClick={() => this.handleFilterSelection(cate.name)}
                    >
                      {cate.name}
                      {cate.image ? (
                        <img
                          alt="my category"
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
                {/* </table> */}
                <div style={{ textAlign: "left", marginLeft: "8px" }}>
                  <Typography
                    variant={"subtitle2"}
                    gutterBottom
                    style={{ marginTop: "5px" }}
                  >
                    What is your zip code?
                  </Typography>
                  <TextField
                    style={{ marginTop: "-5px" }}
                    id="filled-number"
                    placeholder="ZIPCODE"
                    value={this.state.zipcode}
                    margin="normal"
                    variant={"outlined"}
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
                  variant="outlined"
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

Filter.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    myfilters: selectActiveFilter(state)
  };
};

export default connect(
  mapStateToProps,
  { addFiltered, addFilter, removeFilter, addClinics }
)(withRouter(withStyles(styles)(Filter)));

const buttonStyle = {
  border: "1px solid #000000",
  width: "48%",
  margin: "1%"
};
