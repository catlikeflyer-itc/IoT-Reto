import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import AddSalon from "../Components/AddSalon";
import axios from "axios";
import SalonCard from "../Components/SalonCard";
import { Box } from "@mui/system";

export default function Salon() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/salones");

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3} fullwidth>
      <Grid item xs={12} md={4}>
        <AddSalon />
      </Grid>
      <Grid item xs={12} md={8}>
        <Box m={4}>
          <Grid container spacing={3}>
            {data.map((d) =>
              d.idSalon !== 9999 ? (
                <Grid item xs={12} md={3} key={d.idSalon}>
                  <SalonCard data={d} />
                </Grid>
              ) : (
                ""
              )
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
