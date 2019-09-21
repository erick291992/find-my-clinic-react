import React, { Component } from "react";
import Signup from "../component/Signup";

class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
          <IconButton onClick={this.props.handleDrawerClose}>
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
            <Signup />
          </ListItem>
          <Divider />
          <ListItem button>
            <Link href={"/lawyer"}>
              <ListItemText primary={"Needs a Lawyer?"} />
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link href={"/clinics"}>
              <ListItemText primary={"All Clinics"} />
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link href={"/about"}>
              <ListItemText primary={"About us"} />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default Drawer;
