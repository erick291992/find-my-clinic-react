import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Footer from "../component/Footer";

export default function Lawyer() {
  return (
    <div>
      <div style={{ padding: "50px 10px" }}>
        <Typography variant="h2">Lawyer Page</Typography>
      </div>
      <Footer />
    </div>
  );
}
