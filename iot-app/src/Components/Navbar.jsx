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
  import { Link as SmoothLink } from "react-scroll";
  
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
  
    const items = ["Home", "Registrar Admin", "Registrar Salon", "Ver registros", "Registro Manual"]
  
    const list = (anchor) => (
      <div
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        className={classes.list}
      >
        <List>
          {items.map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </div>
    );
  
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <img alt="logo" src={''} className={classes.logo} />
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
                <Button href="#home" color="inherit">
                  <SmoothLink
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </SmoothLink>
                </Button>
                <Button edge="right" href="#registrar-admin" color="inherit">
                  <SmoothLink
                    activeClass="active"
                    to="registrar-admin"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Registrar Admin
                  </SmoothLink>
                </Button>
                <Button edge="right" href="#registrar-salon" color="inherit">
                  <SmoothLink
                    activeClass="active"
                    to="registrar-salon"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Registrar Salon
                  </SmoothLink>
                </Button>
                <Button href="#registros" color="inherit">
                  <SmoothLink
                    activeClass="active"
                    to="registros"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Ver registros
                  </SmoothLink>
                </Button>
                <Button href="#add-registros" color="inherit">
                  <SmoothLink
                    activeClass="active"
                    to="add-registros"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Registro Manual
                  </SmoothLink>
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  