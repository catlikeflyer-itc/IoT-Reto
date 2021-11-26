import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SalonCard({data}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Aula {data.idSalon}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Edificio: {data.aula}<br />
            Volumen: {data.volumen}<br />
            Ventanas: {data.ventanas}<br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}