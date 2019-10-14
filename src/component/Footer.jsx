import React from "react";
import { ReactComponent as FacebokIcon } from "../../src/assets/icons/facebook.svg";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

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
      paddingRight: "5px",
      marginLeft: "50px"
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
      paddingRight: "20px",
      display: "table"
    }
  },
  link: {
    color: "#566573",
    cursor: "pointer",
    marginRight: "10px",
    textAlign: "left"
  },
  facebookLink: {
    color: "#566573",
    cursor: "pointer",
    textDecoration: "none",
    cursor: "pointer"
  },
  facebookLinkLabel: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "table-cell",
      verticalAlign: "middle",
      paddingLeft: "5px"
    }
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
      <Grid sm={6} className={classes.linkSocialMedia}>
        <a
          className={classes.facebookLink}
          href="https://www.facebook.com/Legalforall-111044213603661/?view_public_for=111044213603661"
          target="_blank"
        >
          <FacebokIcon width="25px" height="25px" />
          <label className={classes.facebookLinkLabel}>Have a quiestion?</label>
        </a>
      </Grid>
    </Grid>
  );
}

export default withRouter(Footer);
