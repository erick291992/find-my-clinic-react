import React from "react";
import Map from "../component/Map";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PlaceIcon from "@material-ui/icons/Place";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LanguageIcon from "@material-ui/icons/Language";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import {
  selectActiveClinics,
  selectedClinic,
  singleListClinic
} from "../store/clinic/reducer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "98%",
    margin: "0px",
    paddingTop: "30px"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    margin: "0px",
    height: "50vh",
    paddingTop: "40px"
  }
}));

function Details(props) {
  let classes = useStyles();

  return (
    <div>
      <Grid container spacing={0} className={classes.root}>
        <Grid
          item
          xs={12}
          style={{ height: "20vh", backgroundColor: "A6ACAF" }}
        ></Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            {props.selectedClinicList.map(clinic => {
              return (
                <div>
                  <h3>{clinic.name}</h3>
                  <label>
                    <PlaceIcon>Place</PlaceIcon> {clinic.address}
                  </label>
                  <br />
                  <label>
                    <PhoneEnabledIcon />
                  </label>
                  {clinic.phone.forEach(phone => {
                    return <label>{phone}</label>;
                  })}

                  <br />
                  <label>
                    <AlternateEmailIcon /> {clinic.email}
                  </label>
                  <br />
                  <label>
                    <GTranslateIcon />
                    {clinic.languages.forEach(language => {
                      return <label>{language}</label>;
                    })}
                  </label>
                  <br />
                  <label>
                    <LanguageIcon />
                    {clinic.sourceWebsite}
                  </label>
                </div>
              );
            })}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper>
            <Map w={"100%"} h={"50vh"} list={props.selectedClinicList} />
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
const mapStateToProps = state => {
  console.log("Details ->", selectedClinic(state));
  return {
    mylist: selectActiveClinics(state),
    clinic: selectedClinic(state),
    selectedClinicList: singleListClinic(state)
  };
};

// export default connect(mapStateToProps)(Details);

export default connect(mapStateToProps)(Details);
