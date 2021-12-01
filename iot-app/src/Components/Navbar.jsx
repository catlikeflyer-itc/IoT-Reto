import {
  AppBar,
  Button,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import DrawerComponent from "./Drawer";
import tec from "../tec.png";

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      maxWidth: 100,
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

  const items = [
    { title: "Home", to: "" },
    { title: "Administradores", to: "admin" },
    { title: "Salones", to: "salones" },
    { title: "Dispositivos", to: "dispositivos" },
    { title: "Registros", to: "registros" },
  ];

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <img alt="logo" src={tec} className={classes.logo} />
          {isMobile ? (
            <DrawerComponent linkList={items} />
          ) : (
            <div className={classes.links}>
              {items.map((item) => (
                <Button href={item.to.length > 0 ? (item.to) : ("/")} color="inherit">
                  {item.title}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.appbarSpace} />
    </div>
  );
}
