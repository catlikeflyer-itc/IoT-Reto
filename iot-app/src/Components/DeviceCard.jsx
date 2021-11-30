import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function DeviceCard({data}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dispositivo {data.idDevice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            MAC: {data.MAC}<br />
            Sensor CO: {data.sensorCO}<br />
            Sensor CO2 {data.sensorCO2}<br />
            Sensor Alcohol: {data.alcohol}<br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}