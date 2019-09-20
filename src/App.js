import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './container/Home'
import About from './container/About'
import Lawyer from './container/Lawyers'
import Results from './container/Results'
import Details from './container/Details'
import Notfound from './container/Notfound'
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Link from '@material-ui/core/Link';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Filter from "./component/Filter";
import MenuItemDesktop from "./component/MenuItemDesktop";
import Signup from './component/Signup'
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


function App() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  let linksDesktop = <MenuItemDesktop />;

  let linksMovil = (
    <Grid container justify="flex-end">
      <Grid item>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
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
    <Router history={createBrowserHistory()}>
    <div className={classes.root}>

      <CssBaseline />
      <AppBar
        position="absolute"
        style={{ padding: "10px 0", backgroundColor: "#FFFFFF" }} >
        <Toolbar>
          <Link href={"/"}><img
            src="legal4all-logo.png"
            alt="Legal4All"
            height="auto"
            width="100"
          /></Link>
          {mymenu}
        </Toolbar>
        <div style={{ width: "90%", margin: "20px 5% 5px 5%" }}>{filter22}</div>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
        style={{paddingTop:"52px"}}
      >
        <div className={classes.drawerHeader} />
          <div >
            <Switch>
              <Route exact path="/" component={Home} exact />
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/lawyer" component={Lawyer} />
              <Route path="/clinic-details" component={Details} />
              <Route path="/results" component={Results} />
              <Route component={Notfound} />
            </Switch>
          </div>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            {/* <ListItemText primary={"Sign Up For Updates!"} /> */}
            <Signup/>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link href={"/lawyer"}><ListItemText primary={"Needs a Lawyer?"} /></Link>
          </ListItem>
          <Divider />
          <ListItem button>
          <Link href={"/clinics"}><ListItemText primary={"All Clinics"} /></Link>
          </ListItem>
          <Divider />
          <ListItem button>
          <Link href={"/about"}><ListItemText primary={"About us"} /></Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
    </Router>
  );
}

export default App;