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
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";

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

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <label onClick={this.handleClickOpen} style={linkStyle}>
          Sign Up For Updates
        </label>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
          //fullScreen={isFullScreen}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {
              <p>
                Want to receive updates
                <br /> about our site?
              </p>
            }
          </DialogTitle>
          <DialogContent dividers>
            <form>
              <TextField
                id="outlined-bare"
                placeholder={"name"}
                style={textfieldStyle}
                defaultValue={this.state.name}
                margin="normal"
                variant="outlined"
              />
              <br />
              <TextField
                id="outlined-bare"
                placeholder={"email"}
                style={textfieldStyle}
                defaultValue={this.state.email}
                margin="normal"
                variant="outlined"
              />
              <center>
                <label style={{ fontSize: "12px", margin: "15px 0" }}>
                  By providing my name and email, you agree to
                  <br />
                  Legalforall’s Terms of Service and Privacy Policy
                </label>
                <br />
                <br />
                <Button
                  onClick={this.handleClose}
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
      </div>
    );
  }
}

export default Signup;

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
