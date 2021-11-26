import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import UpdateModal from "./UpdateModal";

export default function RegistroCard({ data }) {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (data.matricula !== "AA11" || data.idSalon !== 9999) {
      setVerified(true);
    }
  }, []);

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
            {verified && (
              <div>
                Salon: {data.idSalon} <br />
                <Typography variant="body1" color="green">
                  Verificado por {data.matricula}
                </Typography>
              </div>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <UpdateModal idx={data.id} verified={verified} />
      </CardActions>
    </Card>
  );
}
