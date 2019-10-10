import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    //position: "absolute",
    bottom: "0",
    marginLeft: "0",
    marginRight: "0",
    padding: "5px 10px",
    textAlign: "left"
  },
  link: {
    //margin: theme.spacing(1),
    color: "#566573",
    cursor: "pointer",
    marginRight: "10px",
    textAlign: "left"
  }
}));

function Footer(props) {
  let classes = useStyles();
  return (
    <Grid fluid className={classes.root}>
      <Grid xs={12}>
        <Typography>
          <Link
            className={classes.link}
            underline={"none"}
            onClick={() => {
              props.history.push("/privacy-policy");
            }}
          >
            Privacy Policy
          </Link>
          <Link
            className={classes.link}
            underline={"none"}
            onClick={() => {
              props.history.push("/terms-of-service");
            }}
          >
            Terms of Use
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default withRouter(Footer);
