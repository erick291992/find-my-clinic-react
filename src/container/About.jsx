import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Footer from "../component/Footer";

export default function About() {
  return (
    <div>
      <div style={{ padding: "50px 10px" }}>
        <Typography variant="h2">About Page</Typography>
      </div>
      <Footer />
    </div>
  );
}
