import React, { useState } from "react";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";

export default function AddSalon() {
  const [numSalon, setNumSalon] = useState("");
  const [edificio, setEdificio] = useState(1);
  const [volumen, setVolumen] = useState("");
  const [ventanas, setVentanas] = useState("");

  const [numSalonError, setNumSalonError] = useState(false);
  const [volumenError, setVolumenError] = useState(false);
  const [ventanaError, setVentanaError] = useState(false);

  const onEdificioChange = (event) => {
    event.preventDefault();
    setEdificio(parseInt(event.target.value));
  };

  const onNumSalonChange = (event) => {
    event.preventDefault();
    setNumSalonError(false);
    setNumSalon(parseInt(event.target.value));

    if (
      event.target.value.length === 0 ||
      isNaN(parseInt(event.target.value))
    ) {
      setNumSalonError(true);
    }
  };

  const onVolumenChange = (event) => {
    event.preventDefault();
    setVolumenError(false);
    setVolumen(parseFloat(event.target.value));

    if (
      event.target.value.length === 0 ||
      isNaN(parseInt(event.target.value))
    ) {
      setVolumenError(true);
    }
  };

  const onVentanaChange = (event) => {
    event.preventDefault();
    setVentanaError(false);
    setVentanas(parseInt(event.target.value));

    if (
      event.target.value.length === 0 ||
      isNaN(parseInt(event.target.value))
    ) {
      setVentanaError(true);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const data = {
      idSalon: numSalon,
      aula: edificio,
      volumen: volumen,
      ventanas: ventanas,
    };

    if (!numSalonError) {
      console.log(data);
      axios
        .post(`https://api-reto-iot.herokuapp.com/salon`, data)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          alert("Salon agregado");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Error al agregar el salon");
        });
    } else {
      console.log("Error");
      alert("revisa los datos");
    }
  };

  return (
    <Box m={4} display="flex" flexDirection="column" className="boxer">
      <Typography gutterBottom variant="h6" color="black" align="left">
        Agregar Salon
      </Typography>
      <Box mt={1} width="100%">
        <TextField
          id="num-salon"
          label="Numero de salon"
          required={true}
          onChange={onNumSalonChange}
          error={numSalonError}
        />
      </Box>
      <Box mt={1} width="100%">
        <FormControl>
          <InputLabel id="aulas-label">Aulas</InputLabel>
          <Select
            labelId="aulas-label"
            id="aulas"
            value={edificio}
            label="Aulas"
            onChange={onEdificioChange}
          >
            <MenuItem value={1}>Aulas 1</MenuItem>
            <MenuItem value={2}>Aulas 2</MenuItem>
            <MenuItem value={3}>Aulas 3</MenuItem>
            <MenuItem value={4}>Prepa</MenuItem>
            <MenuItem value={5}>EGADE</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={1} width="100%">
        <TextField
          id="volumen"
          label="Volumen"
          required={false}
          onChange={onVolumenChange}
          error={volumenError}
        />
      </Box>
      <Box mt={1} width="100%">
        <TextField
          id="ventanas"
          label="ventanas"
          required={false}
          onChange={onVentanaChange}
          error={ventanaError}
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
