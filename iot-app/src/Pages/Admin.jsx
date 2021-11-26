import { Grid, Typography } from "@mui/material";
import React from "react";
import AddAdmin from "../Components/AddAdmin";

export default function Admin() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <AddAdmin />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={3}>
        </Grid>
      </Grid>
    </Grid>
  );
}
