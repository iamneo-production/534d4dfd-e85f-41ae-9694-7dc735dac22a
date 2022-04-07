import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: " Add Theme",
      icon: <InboxIcon />,
      onClick: () => history.push("/user/addTheme")
    },
    
    {
      text: "Food Menu",
      icon: <MailIcon />,
      onClick: () => history.push("/foodmenu")
    },
    {
        text: "Add Add-ons",
        icon: <MailIcon />,
        onClick: () => history.push("/add add-ons")
      },
      {
        text: "Logout",
        icon: <MailIcon />,
        onClick: () => history.push("/login")
      }
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);