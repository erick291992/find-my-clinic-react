import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      width: "100%"
    },
    [theme.breakpoints.up("md")]: {
      position: "relative",
      width: "100%"
    }
  },
  paper: {
    backgroundColor: "#BFC1C2",
    color: "#000000"
  }
}));

function TotalNumberClinic(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper square={false} className={classes.paper}>
        <Typography variant="h5" align="center">
          Total clinics found: {props.total}
        </Typography>
      </Paper>
    </div>
  );
}
export default TotalNumberClinic;
