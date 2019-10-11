import React from "react";
import Map from "../component/Map";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PlaceIcon from "@material-ui/icons/Place";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LanguageIcon from "@material-ui/icons/Language";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../component/Footer";
import { getSelectedClinic, findIconPath } from "../utils/utils";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      width: "100vw",
      margin: "0px",
      paddingTop: "0px"
    },
    [theme.breakpoints.up("md")]: {
      flexGrow: 1,
      width: "100vw",
      margin: "0px",
      paddingTop: "3px"
    }
  },
  paper: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
      textAlign: "left",
      margin: "0px",
      height: "65vh",
      paddingTop: "5px",
      overflow: "auto"
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
      textAlign: "left",
      margin: "0px",
      height: "70vh",
      paddingTop: "5px"
    }
  },
  contentDetail: {
    height: "100%"
  },
  labels: {
    marginLeft: "5px"
  },
  list: {
    listStyle: "none",
    marginLeft: "-5px"
  },
  listCategory: {
    listStyle: "none",
    marginLeft: "-5px",
    margintTop: "100px"
  },
  icons: {
    marginRight: "5px",
    paddingTop: "8px"
  }
}));

function Details(props) {
  let classes = useStyles();
  let clinic = getSelectedClinic();
  let width = window.innerWidth;

  const rowMap = (
    <Grid item xs={12} md={6} lg={6}>
      <Paper>
        <Map w={"100%"} h={"70vh"} z={16} list={clinic} />
      </Paper>
    </Grid>
  );

  let showMap = width > 600 ? rowMap : "";

  return (
    <div>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            {clinic.map(clinic => {
              return (
                <div className={classes.contentDetail}>
                  <h3>{clinic.name}</h3>
                  <li className={classes.list}>
                    {clinic.address ? (
                      <PlaceIcon className={classes.icons} />
                    ) : (
                      ""
                    )}
                    {""}
                    {clinic.address ? clinic.address : ""}
                  </li>
                  <br />
                  <li className={classes.list}>
                    {clinic.phone.lenght === 0 ? (
                      ""
                    ) : (
                      <PhoneEnabledIcon className={classes.icons} />
                    )}

                    {clinic.phone.length > 0
                      ? clinic.phone.map(phone => {
                          return (
                            <label className={classes.labels}>{phone}</label>
                          );
                        })
                      : ""}
                  </li>
                  <br />
                  <li className={classes.list}>
                    {clinic.email ? (
                      <AlternateEmailIcon className={classes.icons} />
                    ) : (
                      ""
                    )}
                    {clinic.email ? clinic.email : ""}
                  </li>
                  <br />
                  <li className={classes.list}>
                    {clinic.languages.length > 0 ? (
                      <GTranslateIcon className={classes.icons} />
                    ) : (
                      ""
                    )}
                    {clinic.languages.length > 0
                      ? clinic.languages.map(language => {
                          return (
                            <label className={classes.labels}>{language}</label>
                          );
                        })
                      : ""}
                  </li>
                  <br />
                  <li className={classes.list}>
                    {clinic.sourceWebsite ? (
                      <LanguageIcon className={classes.icons} />
                    ) : (
                      ""
                    )}
                    {clinic.sourceWebsite ? clinic.sourceWebsite : ""}
                  </li>
                  <div style={{ marginTop: "40px" }}>
                    {clinic.searchCategories.map(category => {
                      return (
                        <Button
                          size="small"
                          variant="outlined"
                          disabled
                          style={{ margin: "0 5px", fontSize: "8px" }}
                        >
                          <img
                            src={findIconPath(category)}
                            alt="Legal4All"
                            height="auto"
                            width="12px"
                            height="12px"
                            style={{ marginRight: "5px" }}
                          />
                          {category}
                        </Button>
                      );
                    })}
                  </div>
                  <br />
                  <Button
                    size="medium"
                    color="primary"
                    variant="contained"
                    onClick={() => props.history.push("/results")}
                    style={{ margin: "0 5px", fontSize: "8px" }}
                  >
                    Go Back
                  </Button>
                </div>
              );
            })}
          </Paper>
        </Grid>
        {showMap}
      </Grid>
      <Footer />
    </div>
  );
}

export default withRouter(Details);
