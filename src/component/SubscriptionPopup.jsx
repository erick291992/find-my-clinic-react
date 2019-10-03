import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      padding: theme.spacing(0)
    },
    [theme.breakpoints.up("md")]: {
      margin: 0,
      padding: theme.spacing(2)
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
      padding: theme.spacing(4),
      textAlign: "center"
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8),
      textAlign: "center"
    }
  }
}))(MuiDialogContent);

export default function SubscriptionPopup() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></DialogTitle>
        <DialogContent>
          <img
            src="popup-icon.png"
            alt="Legal4All- subscription"
            height="auto"
            width="100"
          />
          <Typography gutterBottom variant="h5">
            Thanks for signing up!
          </Typography>
          <Typography gutterBottom>
            You will receive monthly updates about new features and changes to
            our site
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
