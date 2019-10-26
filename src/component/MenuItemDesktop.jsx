import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Signup from "../component/Signup";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "0px",
    fontFamily: "Verdana"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    "&:hover": {
      backgroundColor: "transparent",
      border: "none"
    }
  }
}));

function DenseAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify={"flex-end"}>
        <Button>
          <label style={linkStyle} onClick={() => props.history.push("/")}>
            HOME
          </label>
        </Button>
        <Button>
          <Signup style={linkStyle} />
        </Button>
        <Button>
          <Link style={linkStyle} onClick={() => props.history.push("/lawyer")}>
            NEED A LAWYER
          </Link>
        </Button>
        <Button>
          <Link style={linkStyle} onClick={() => props.history.push("/about")}>
            About us
          </Link>
        </Button>
      </Grid>
    </div>
  );
}

export default withRouter(DenseAppBar);
const linkStyle = {
  textDecoration: "none",
  color: "#000000",
  cursor: "pointer"
};
