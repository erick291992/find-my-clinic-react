import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "100wh",
      height: "60vh",
      padding: "10% 4% 5% 4%",
      margin: 0,
      overflowY: "auto",
      zIndex: -1
    },
    [theme.breakpoints.up("md")]: {
      width: "100wh",
      height: "70vh",
      padding: "5% 20% 5% 10%",
      margin: 0,
      overflowY: "auto",
      zIndex: -1
    }
  }
}));

export default function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">About Page</Typography>
      <br />
      <Typography paragraph={true} align={"justify"}>
        Legalforall is a platform on which New Yorkers can connect with New York
        City legal assistance providers.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        In its current form, it shows where NYC’s legal assistance providers are
        located, how they can be reached, and the types of legal matters that
        they can handle.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        We take user feedback very seriously. To send us comments and questions,
        please message us on Facebook or email us at
        <a
          style={{
            textDecoration: "none",
            color: "#398CD9",
            marginLeft: "10px"
          }}
          href="mailto:http://legalforall2019@gmail.com"
        >
          legalforall2019@gmail.com.
        </a>
      </Typography>
    </div>
  );
}
