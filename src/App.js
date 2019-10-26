import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Navbar from './component/Navbar'
import Home from './container/Home'
import About from './container/About'
import Lawyer from './container/Lawyers'
import ResultsDetails from './container/movil/ResultsDetails'
import FilterResults from './container/FilterResults'
import Details from './container/Details'
import Notfound from './container/Notfound'
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItemDesktop from "./component/MenuItemDesktop";
import Mydrawer from './component/Mydrawer'
import Termsofservice from './container/Termsofservice';
import PrivacyPolicy from './container/PrivacyPolicy';
import Footer from "./component/Footer";
const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height:"100%",
    fontFamily:"Arial"
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
    flexShrink: 0
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
  let width = window.innerWidth
  let styleMain = width<600?MainStyleMovil:MainStyleDesktop
  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  let linksDesktop = <MenuItemDesktop />;

  let linksMovil = (
    <Grid container justify={"flex-end"}>
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

  return (
    <Router history={createBrowserHistory()}>
    <div className={classes.root}>

      <CssBaseline />
      <Navbar handleDrawerOpen={handleDrawerOpen} open={open} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
        style={styleMain}
      >
        <div className={classes.drawerHeader} />
          <div >
            <Switch>
              <Route exact path="/" component={Home} exact />
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/lawyer" component={Lawyer} />
              <Route path="/clinic-details" component={Details} />
              <Route path="/results" component={FilterResults} />
              <Route path="/clinics" component={ResultsDetails} />
              <Route path="/terms-of-service" component={Termsofservice} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route component={Notfound} />
            </Switch>
          </div>
      </main>
      <Mydrawer 
          open={open}
          handleDrawerClose={handleDrawerClose}
          drawer={classes.drawer} 
          drawerPaper={classes.drawerPaper}
          drawerHeader={classes.drawerHeader}/>
    </div>
    <Footer />
    </Router>
  );
}

export default App;

const MainStyleDesktop ={
  paddingTop:"58px"
}

const MainStyleMovil ={
  paddingTop:"120px"
}