import React from "react";
import Map from "../component/Map";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
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
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: 0,
      paddingTop: 0,
      height: "calc(100vh - 250px)",
      hyphens: "auto"
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      margin: 0,
      height: "calc(100vh - 170px)",
      hyphens: "auto"
    }
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
      fontSize: "14px",
      hyphens: "auto"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      fontSize: "18px",
      hyphens: "auto"
    }
  },
  subtitle: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
      fontSize: "14px",
      hyphens: "auto",
      overflowWrap: "break-word"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      fontSize: "18px",
      hyphens: "auto",
      overflowWrap: "break-word"
    }
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
  },
  cellicon: {
    width: "20px"
  },
  cellname: {
    width: "auto"
  }
}));

function Details(props) {
  let classes = useStyles();
  let clinic = getSelectedClinic();
  let width = window.innerWidth;

  const rowMap = (
    <Grid item xs={12} md={6} lg={6} className={classes.root}>
      <Map z={16} list={clinic} />
    </Grid>
  );

  let showMap = width > 600 ? rowMap : "";

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12} md={6} lg={6} className={classes.root}>
        <div
          style={{
            width: window.innerWidth < 600 ? window.innerWidth : "100%",
            height: "calc(100vh - 250px)",
            paddingLeft: "4%",
            paddingRight: "4%",
            wordBreak: "break-all",
            paddingTop: "40px",
            textAlign: "left",
            overflow: "scroll"
          }}
        >
          <table>
            <tr>
              <th colSpan={2}>
                <Typography variant={"h6"}>{clinic[0].name}</Typography>
              </th>
            </tr>
            <tr>
              <th className={classes.cellicon}>
                <PlaceIcon className={classes.icons} />
              </th>
              <th className={classes.cellname}>
                <Typography variant={"subtitle2"}>
                  {clinic[0].address}
                </Typography>
              </th>
            </tr>
            <tr>
              <th className={classes.cellicon}>
                <PhoneEnabledIcon className={classes.icons} />
              </th>
              <th className={classes.cellname}>
                {clinic[0].phone.length > 0
                  ? clinic[0].phone.map(phone => {
                      return (
                        <Typography variant={"subtitle2"}>{phone}</Typography>
                      );
                    })
                  : ""}
              </th>
            </tr>
            <tr>
              <th className={classes.cellicon}>
                <AlternateEmailIcon className={classes.icons} />
              </th>
              <th className={classes.cellname}>
                <Typography variant={"subtitle2"}>{clinic[0].email}</Typography>
              </th>
            </tr>
            <tr>
              <th className={classes.cellicon}>
                <GTranslateIcon className={classes.icons} />
              </th>
              <th className={classes.cellname}>
                {clinic[0].languages.length > 0
                  ? clinic[0].languages.map(language => {
                      return (
                        <Typography
                          variant={"subtitle2"}
                          display={"inline"}
                          style={{ marginLeft: "5px" }}
                        >
                          {language}
                        </Typography>
                      );
                    })
                  : ""}
              </th>
            </tr>
            <tr>
              <th className={classes.cellicon}>
                <LanguageIcon className={classes.icons} />
              </th>
              <th className={classes.cellname}>{clinic[0].sourceWebsite}</th>
            </tr>
          </table>
          <div style={{ marginTop: "40px" }}>
            {clinic[0].searchCategories.map(category => {
              return (
                <Button
                  size={"small"}
                  variant={"outlined"}
                  color={"default"}
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
            size={"medium"}
            color={"primary"}
            variant={"contained"}
            onClick={() => props.history.push("/results")}
            style={{ margin: "0 5px", fontSize: "8px" }}
          >
            Go Back
          </Button>
        </div>
      </Grid>
      {showMap}
    </Grid>
  );
}

export default withRouter(Details);
