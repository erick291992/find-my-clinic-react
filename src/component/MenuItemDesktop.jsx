import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Filter2 from "../component/Filter2";
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
      backgroundColor: "transparent"
    }
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="flex-end">
        <Grid item>
          <Button class={classes.button}>
            <p style={{ textAlign: "left", marginTop: "8px" }}>
              <label>NYC’s legal aid providers. All in one place</label>
              <Filter2 />
            </p>
          </Button>
          <Button>
            <Signup />
          </Button>
          <Button>Needs a Lawyed?</Button>
          <Button>About us</Button>
        </Grid>
      </Grid>
    </div>
  );
}
