import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
  root: {
    display: "flex"
  },
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
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));

function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  let linksDesktop = <MenuItemDesktop />;

  let linksMovil = (
    <Grid container justify="flex-end">
      <Grid item>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={props.handleDrawerOpen}
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
