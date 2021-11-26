import {
  AppBar,
  Button,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      maxWidth: 120,
      marginRight: "10px",
    },
    links: {
      marginLeft: "auto",
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
    appbarSpace: theme.mixins.toolbar,
  };
});

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const items = [
    "Home",
    "Administradores",
    "Salones",
    "Registros",
  ];

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={classes.list}
    >
      <List>
        {items.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <img alt="logo" src={""} className={classes.logo} />
          {isMobile ? (
            <div className={classes.links}>
              <IconButton
                color="textPrimary"
                className={classes.menuButton}
                edge="start"
                aria-label="right"
                onClick={toggleDrawer("right", true)}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
              >
                {list("right")}
              </SwipeableDrawer>
            </div>
          ) : (
            <div className={classes.links}>
              <Button href="/" color="inherit">
                Home
              </Button>
              <Button edge="right" href="admin" color="inherit">
                Administradores
              </Button>
              <Button edge="right" href="salones" color="inherit">
                Salones
              </Button>
              <Button href="registros" color="inherit">
                Registros
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.appbarSpace} />
    </div>
  );
}
