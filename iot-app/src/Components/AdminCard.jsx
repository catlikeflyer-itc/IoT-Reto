import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function AdminCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.matricula}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.isStudent ? "Alumno" : "Profesor"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
