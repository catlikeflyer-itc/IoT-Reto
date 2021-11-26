import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";
import RegistroCard from "../Components/RegistroCard";
import AddRegistro from "../Components/AddRegistro";

export default function Registros() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api-reto-iot.herokuapp.com/registros");

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Box m={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <AddRegistro />
        </Grid>
        <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {data.map((d) => (
                <Grid item xs={12} md={4}>
                  <RegistroCard data={d} key={d.id} />
                </Grid>
              ))}
            </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
