import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Filter from "./Filter";
import Signup from "../component/Signup";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "transparent",
      border: "none"
    }
  }
}));

function DenseAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="flex-end">
        <Grid item>
          <Button class={classes.button}>
            <p style={{ textAlign: "left", marginTop: "8px" }}>
              <label>NYC’s legal aid providers. All in one place</label>
              <Filter />
            </p>
          </Button>
          <Button>
            <Signup style={linkStyle} />
          </Button>
          <Button>
            <Link
              style={linkStyle}
              onClick={() => props.history.push("/lawyer")}
            >
              Needs a Lawyed?
            </Link>
          </Button>
          <Button>
            <Link
              style={linkStyle}
              onClick={() => props.history.push("/about")}
            >
              About us
            </Link>
          </Button>
        </Grid>
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

//href={"/about"}
