import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw"
  }
}));

export default function Termsofservice() {
  let classes = useStyles();
  let width = window.innerWidth;
  let heighContent = width < 600 ? "64vh" : "70vh";
  return (
    <div className={classes.root}>
      <div style={{ padding: "50px 10px", height: heighContent }}>
        <Typography variant="h2">Terms of Service Page</Typography>
      </div>
    </div>
  );
}
