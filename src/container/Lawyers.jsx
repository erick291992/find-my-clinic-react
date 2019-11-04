import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

export default function Lawyer() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Need a Lawyer</Typography>
      <Typography paragraph={true} align={"justify"}>
        If you would like to get referred to a lawyer, please send us a message
        through our Facebook page.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        What we can do is connect you to organizations that have active legal
        referral services or refer you to a lawyer from our own legal network.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        In your request, please provide a brief description of your legal matter
        and mention whether you are willing and able to pay for legal services.
        As of now, requests for pro-bono lawyers are welcome but will be more
        challenging to satisfy.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        We will do our best to satisfy every request that we receive.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        We cannot guarantee that we will be able to satisfy your request for a
        referral to a lawyer.
      </Typography>
    </div>
  );
}
