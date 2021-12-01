import React, { useState } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import axios from "axios";

export default function AddRegistro() {
  const [tiempo, setTiempo] = useState("00");
  const [CO, setCO] = useState(0);
  const [CO2, setCO2] = useState(0);
  const [humedad, setHumedad] = useState(0);
  const [matricula, setMatricula] = useState("AA11");
  const [salon, setSalon] = useState(9999);

  const [COError, setCOError] = useState(false);
  const [CO2Error, setCO2Error] = useState(false);
  const [humedadError, setHumedadError] = useState(false);
  const [salonError, setSalonError] = useState(false);

  const onTiempoChange = (e) => {
    setTiempo(e.target.value);
  };

  const onCOChange = (e) => {
    e.preventDefault();
    setCOError(false);
    setCO(e.target.value);

    if (e.target.value === "" || isNaN(parseInt(e.target.value))) {
      setCOError(true);
    }

    setCO(parseInt(e.target.value));
  };

  const onCO2Change = (e) => {
    e.preventDefault();
    setCO2Error(false);
    setCO2(parseInt(e.target.value));

    if (e.target.value === "" || isNaN(parseInt(e.target.value))) {
      setCO2Error(true);
    }
  };

  const onHumedadChange = (e) => {
    e.preventDefault();
    setHumedadError(false);
    setHumedad(parseInt(e.target.value));

    if (e.target.value === "" || isNaN(parseInt(e.target.value))) {
      setHumedadError(true);
    }
  };

  const onSalonChange = (e) => {
    e.preventDefault();
    setSalonError(false);
    setSalon(parseInt(e.target.value));

    if (e.target.value === "" || isNaN(parseInt(e.target.value))) {
      setSalonError(true);
    }
  };

  const onMatriculaChange = (e) => {
    setMatricula(e.target.value);
  }

    const onSubmit = (event) => {
      event.preventDefault();

      const data = {
        CO: CO,
        CO2: CO2,
        humedad: humedad,
        idSalon: salon,
        matricula: matricula,
      };

      if (!salonError) {
        console.log(data);
        axios
          .post(`https://api-reto-iot.herokuapp.com/registros`, data)
          .then((res) => {
            console.log(res);
            console.log(res.data);
            alert("Agregado registro");
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            alert("Error al agregar el registro");
          });
      } else {
        console.log("Error");
        alert("revisa los datos");
      }
    };
    
  return (
    <Box m={4} display="flex" flexDirection="column" className="boxer">
      <Typography gutterBottom variant="h6" color="black" align="left">
        Agregar Registro Manual
      </Typography>
      <Box mt={1} width="100%">
        <TextField
          id="CO"
          label="CO"
          required={true}
          onChange={onCOChange}
          error={COError}
        />
      </Box>
      <Box mt={1} width="100%">
        <TextField
          id="CO2"
          label="CO2"
          required={true}
          onChange={onCO2Change}
          error={CO2Error}
        />
      </Box>
      <Box mt={1} width="100%">
        <TextField
          id="alcochol"
          label="Alcohol"
          required={true}
          onChange={onHumedadChange}
          error={humedadError}
        />
      </Box>
      <Box mt={1} width="100%">
        <TextField
          id="salone"
          label="Salon"
          required={true}
          onChange={onSalonChange}
          error={salonError}
        />
      </Box>
      <Box mt={1} width="100%">
        <TextField
          id="matri"
          label="Matricula"
          required={true}
          onChange={onMatriculaChange}
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
