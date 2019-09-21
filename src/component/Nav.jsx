import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import Link from '@material-ui/core/Link';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Filter from "./Filter";
import clsx from "clsx";



import MenuItemDesktop from "./MenuItemDesktop";


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "98%",
    margin: "0px"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    margin: "0px"
  }
});

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      clinicSelected: null
    };
  }

  


  render() {
	const { classes } = this.props;
	//const [open, setOpen] = React.useState(false);

	let handleDrawerOpen = this.props.handleDrawerOpen
	let handleDrawerClose = this.props.handleDrawerClose

	
	let linksDesktop = <MenuItemDesktop />;
	let linksMovil = (
		<Grid container justify="flex-end">
		<Grid item>
			<IconButton
			color="inherit"
			aria-label="open drawer"
			edge="end"
			onClick={()=>{handleDrawerOpen()}}
			//className={clsx(open && classes.hide)}
			>
			<MenuIcon style={{ color: "#000000" }} />
			</IconButton>
		</Grid>
		</Grid>
	);
	let mymenu = window.innerWidth < 600 ? linksMovil : linksDesktop;
	let filter22 = window.innerWidth < 600 ? <Filter /> : "";

	

    return (
        <div className={classes.root}>
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
			
      </div>
    );
  }
}



Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Nav));
