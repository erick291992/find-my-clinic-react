import React from "react";
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
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import { subscription } from "../service/subscriptionService";
import SubscriptionPopup from "../component/SubscriptionPopup";

const styles = theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: "80px",
      textAlign: "center"
    },
    [theme.breakpoints.up("md")]: {
      margin: 0,
      paddingLeft: theme.spacing(9),
      paddingRight: theme.spacing(9),
      paddingTop: "50px",
      textAlign: "center"
    }
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
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
      paddingBottom: theme.spacing(0)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isSubscripted: false,
      userName: null,
      userEmail: null
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleName = e => {
    console.log("NAME: ", e.target.value);
    this.setState({ userName: e.target.value });
  };

  handleEmail = e => {
    this.setState({ userEmail: e.target.value });
    console.log("EMAIL: ", e.target.value);
  };

  handleSubscription = () => {
    const res = subscription(this.state.userName, this.state.userEmail);
    res.then(response => {
      this.setState({ isSubscripted: response });
      this.handleClose();
    });
  };

  render() {
    let popupMessage = this.state.isSubscripted ? <SubscriptionPopup /> : "";
    return (
      <div>
        <label onClick={this.handleClickOpen} style={linkStyle}>
          Sign Up For Updates
        </label>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            <Typography gutterBottom variant="h5">
              Want to receive updates
              <br /> about our site?
            </Typography>
          </DialogTitle>
          <DialogContent>
            <form>
              <TextField
                id="outlined-bare"
                placeholder={"Name"}
                style={textfieldStyle}
                defaultValue={this.state.name}
                margin="normal"
                variant="outlined"
                onChange={this.handleName}
              />
              <br />
              <TextField
                id="outlined-bare"
                placeholder={"Email"}
                style={textfieldStyle}
                defaultValue={this.state.email}
                margin="normal"
                variant="outlined"
                onChange={this.handleEmail}
              />
              <center>
                <label style={{ fontSize: "12px", margin: "15px 0" }}>
                  By providing my name and email, you agree to
                  <br />
                  Legalforall’s{" "}
                  <Link
                    color="primary"
                    //underline
                    onClick={() => this.props.history.push("/terms-of-service")}
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    color="primary"
                    //underline
                    onClick={() => this.props.history.push("/privacy-policy")}
                  >
                    Privacy Policy
                  </Link>
                </label>
                <br />
                <br />
                <Button
                  onClick={this.handleSubscription}
                  style={submitStyle}
                  color="default"
                  autoFocus
                >
                  SIGN UP
                </Button>
              </center>
            </form>
          </DialogContent>
        </Dialog>
        {popupMessage}
      </div>
    );
  }
}

export default withRouter(Signup);

const termStyle = {
  fontSize: "10px",
  margin: "10px 0px"
};
const linkStyle = {
  textDecoration: "none",
  color: "#000000",
  cursor: "pointer"
};
const submitStyle = {
  border: "1px solid #000000",
  padding: "5px 15px"
};
const textfieldStyle = {
  width: "100%"
};
