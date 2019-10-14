import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { SvgIcon } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    bottom: "0",
    marginLeft: "0",
    marginRight: "0",
    padding: "5px 10px",
    textAlign: "left",
    height: "50px"
  },
  linkBox: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
      paddingLeft: "5px"
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      paddingLeft: "20px"
    }
  },
  linkSocialMedia: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "right",
      paddingRight: "5px"
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
      paddingRight: "20px"
    }
  },
  link: {
    color: "#566573",
    cursor: "pointer",
    marginRight: "10px",
    textAlign: "left"
  }
}));

function Footer(props) {
  let classes = useStyles();
  return (
    <Grid fluid={false} container className={classes.root}>
      <Grid sm={6} className={classes.linkBox}>
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
      </Grid>
      <Grid sm={6} className={classes.linkSocialMedia}></Grid>
    </Grid>
  );
}

export default withRouter(Footer);
