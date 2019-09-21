import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Filter from "../component/Filter";
import MenuItemDesktop from "../component/MenuItemDesktop";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  }
}));

function Navbar(props) {
  const classes = useStyles();
  let handleDrawerOpen = props.handleDrawerOpen;
  let open = props.open;
  let linksDesktop = <MenuItemDesktop />;

  let linksMovil = (
    <Grid container justify="flex-end">
      <Grid item>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={() => handleDrawerOpen()}
          className={clsx(open && classes.hide)}
        >
          <MenuIcon style={{ color: "#000000" }} />
        </IconButton>
      </Grid>
    </Grid>
  );

  let mymenu = window.innerWidth < 600 ? linksMovil : linksDesktop;
  let filter22 = window.innerWidth < 600 ? <Filter /> : "";

  return (
    <AppBar
      position="absolute"
      style={{ padding: "10px 0", backgroundColor: "#FFFFFF" }}
    >
      <Toolbar>
        <Link href={"/"}>
          <img
            src="legal4all-logo.png"
            alt="Legal4All"
            height="auto"
            width="100"
          />
        </Link>
        {mymenu}
      </Toolbar>
      <div style={{ width: "90%", margin: "20px 5% 5px 5%" }}>{filter22}</div>
    </AppBar>
  );
}

export default Navbar;
