import React, { useState } from "react";
import {
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";

export default function AddAdmin() {
  const [MAC, setMAC] = useState("");
  const [MACError, setMACError] = useState(false);
  const [sensorCO, setSensorCO] = useState(false);
  const [sensorCO2, setSensorCO2] = useState(false);
  const [sensorAlcohol, setSensorAlcohol] = useState(false);

  const onCOChange = (e) => {
    e.preventDefault();
    setSensorCO(!sensorCO);
  };

  const onCO2Change = (e) => {
    e.preventDefault();
    setSensorCO2(!sensorCO2);
  };

  const onAlcoholChange = (e) => {
    e.preventDefault();
    setSensorAlcohol(!sensorCO);
  };

  const onMACChange = (e) => {
    e.preventDefault();
    setMACError(false);
    setMAC(e.target.value);

    if (MAC.length !== 12) {
      setMACError(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setMACError(false);

    if (!MACError) {
      const dispo = {
        MAC: MAC,
        sensorCO: sensorCO,
        sensorCO2: sensorCO2,
        sensorAlcohol: sensorAlcohol,
      };

      axios
        .post(`https://api-reto-iot.herokuapp.com/dispositivo`, dispo)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          alert("Dipositivo agregado");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Error agregando dispositivo!");
        });
    } else {
      console.log("Error");
      alert("MAC invalida");
    }
  };

  return (
    <Box m={4} display="flex" flexDirection="column" className="boxer">
      <Typography gutterBottom variant="h6" color="black" align="left">
        Agregar Dispositivo
      </Typography>
      <Box mt={1} width="100%">
        <TextField
          id="mac"
          label="MAC Address"
          required={true}
          onChange={onMACChange}
          error={MACError}
        />
      </Box>
      <Box mt={1} width="100%">
        <FormControlLabel
          label="Sensor CO"
          control={<Checkbox checked={sensorCO} onChange={onCOChange} />}
        />
        <FormControlLabel
          label="Sensor CO"
          control={<Checkbox checked={sensorCO2} onChange={onCO2Change} />}
        />
        <FormControlLabel
          label="Sensor Alcohol"
          control={<Checkbox checked={sensorAlcohol} onChange={onAlcoholChange} />}
        />
      </Box>
      <Box mt={1} width="100%">
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Agregar
        </Button>
      </Box>
    </Box>
  );
}
