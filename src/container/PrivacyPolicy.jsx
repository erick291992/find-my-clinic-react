import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Footer from "../component/Footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw"
  }
}));

export default function PrivacyPolicy() {
  let classes = useStyles();
  let width = window.innerWidth;
  let heighContent = width < 600 ? "64vh" : "70vh";
  return (
    <div className={classes.root}>
      <div style={{ padding: "50px 10px", height: heighContent }}>
        <Typography variant="h2">Privacy Policy Page</Typography>
      </div>
      <Footer />
    </div>
  );
}
