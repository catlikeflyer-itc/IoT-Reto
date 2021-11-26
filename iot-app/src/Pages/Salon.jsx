import React from "react";
import { Grid } from "@mui/material";
import AddSalon from "../Components/AddSalon";

export default function Salon() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <AddSalon />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={3}></Grid>
      </Grid>
    </Grid>
  );
}
