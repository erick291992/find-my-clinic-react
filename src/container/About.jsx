import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Footer from "../component/Footer";

export default function About() {
  let width = window.innerWidth;
  let heighContent = width < 600 ? "64vh" : "70vh";
  return (
    <div>
      <div style={{ padding: "50px 10px", height: heighContent }}>
        <Typography variant="h2">About Page</Typography>
      </div>
      <Footer />
    </div>
  );
}
