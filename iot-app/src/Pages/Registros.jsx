import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";
import RegistroCard from "../Components/RegistroCard";

export default function Registros() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/registros");

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Box m={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={8}>
          <Box m={4} display="flex" flexDirection="row">
            <Grid container spacing={3}>
              {data.map((d) => (
                <Grid item xs={12} md={4}>
                  <RegistroCard data={d} key={d.id} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
