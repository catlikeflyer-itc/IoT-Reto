import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import UpdateModal from "./UpdateModal";

export default function RegistroCard({ data }) {
  return (
    <Card sx={{ maxWidth: "345" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Registro {data.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tiempo: {data.tiempo} <br />
            CO2: {data.CO2} <br />
            CO: {data.CO} <br />
            Humedad: {data.humedad} <br />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <UpdateModal idx={data.id} />
      </CardActions>
    </Card>
  );
}
