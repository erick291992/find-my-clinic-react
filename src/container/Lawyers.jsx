import React from "react";
import { Typography } from "@material-ui/core";

export default function Lawyer() {
  let width = window.innerWidth;
  let heighContent = width < 600 ? "64vh" : "70vh";
  return (
    <div>
      <div style={{ padding: "50px 10px", height: heighContent }}>
        <Typography variant="h2">Lawyer Page</Typography>
      </div>
    </div>
  );
}
