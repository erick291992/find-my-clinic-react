import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Signup from "./Signup";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class Mydrawer extends Component {
  render() {
    let theme = { useTheme };
    let handlerClose = this.props.handleDrawerClose;
    let open = this.props.open;
    let drawer = this.props.drawer;
    let drawerPaper = this.props.drawerPaper;
    let drawerHeader = this.props.drawerHeader;

    return (
      <Drawer
        className={drawer}
        variant={"persistent"}
        anchor={"right"}
        open={open}
        classes={{
          paper: drawerPaper
        }}
      >
        <div className={drawerHeader}>
          <IconButton onClick={() => handlerClose()}>
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
            <ListItemText
              primary={"Home"}
              onClick={() => this.props.history.push("/")}
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <Signup />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary={"Needs a Lawyer?"}
              onClick={() => this.props.history.push("/lawyer")}
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary={"All Clinics"}
              onClick={() => this.props.history.push("/clinics")}
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary={"About us"}
              onClick={() => this.props.history.push("/about")}
            />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withRouter(Mydrawer);
