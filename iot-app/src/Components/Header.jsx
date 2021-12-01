import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    backImageDiv: {
      height: "100vh",
      backgroundImage: `url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100%",
      position: "absolute",
      filter: "brightness(0.5)",
      top: 0,
      left: 0,
      backgroundAttachment: "fixed",
    },
    main: {
      position: "relative",
      zIndex: 10,
      maxWidth: "100%",
      height: "100%",
    },
    title: {
      fontSize: 50,
      color: "#ffe300",
      fontFamily: "Oswald",
    },
    container: {
      width: "100%",
      height: "100vh",
    },
    appbarSpace: theme.mixins.toolbar,
  };
});

export default function Header() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.container}>
      <div className={`${classes.backImageDiv} ${classes.appbarSpace}`}></div>
      <Box
        className={classes.main}
        flexDirection="column"
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Box p={isMobile ? 3 : 2}>
          <Typography
            variant="h2"
            component="h6"
            align="center"
            mt={4}
            style={{ fontFamily: "Oswald", color: "white" }}
            gutterBottom
          >
            Implementación de IoT: Ciudades Inteligentes
          </Typography>
          <Box display="flex" justifyContent="center">
            <Typography
              paragraph
              align="center"
              style={{ color: "white", fontSize: 20, maxWidth: "70%" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempore maxime harum placeat quod. Ut, natus beatae vel similique
              deserunt sint iste repellat illum laborum est. Quas provident
              vitae at?
              <ul>
                <li>Joshua Amaya</li>
                <li>Diego Corrales</li>
                <li>Sebastián González</li>
                <li>Gerardo Gutiérrez</li>
                <li>Mateo Herrera</li>
                <li>Do Hyun Nam</li>
              </ul>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
