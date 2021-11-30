import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import AddDispositivo from "../Components/AddDispositivo";
import axios from "axios";
import DeviceCard from "../Components/DeviceCard";
import { Box } from "@mui/system";

export default function Dispositivo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api-reto-iot.herokuapp.com/dispositivos"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3} fullwidth>
      <Grid item xs={12} md={4}>
        <AddDispositivo />
      </Grid>
      <Grid item xs={12} md={8}>
        <Box m={4}>
          <Grid container spacing={3}>
            {data.map((d) =>
              d.idSalon !== 9999 ? (
                <Grid item xs={12} md={3} key={d.idSalon}>
                  <DeviceCard data={d} />
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
