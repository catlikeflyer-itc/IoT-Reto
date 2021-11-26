import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddAdmin from "../Components/AddAdmin";
import axios from "axios";
import AdminCard from "../Components/AdminCard";
import { Box } from "@mui/system";

export default function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api-reto-iot.herokuapp.com/admins");

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <AddAdmin />
      </Grid>
      <Grid item xs={12} md={8}>
        <Box m={4} display="flex" flexDirection="row">
          <Grid container spacing={3}>
            {data.map(
              (d) =>
                d.matricula !== "AA11" && (
                  <Grid item xs={12} md={3} key={d.matricula}>
                    <AdminCard data={d} />
                  </Grid>
                )
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
