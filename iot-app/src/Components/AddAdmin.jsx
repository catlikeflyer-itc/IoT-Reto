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
  const [matricula, setMatricula] = useState("");
  const [matError, setMatError] = useState(false);
  const [isStudent, setisStudent] = useState(false);

  const onStudentChange = (e) => {
    e.preventDefault();
    setisStudent(!isStudent);
  };

  const onMatriculaChange = (e) => {
    e.preventDefault();
    setMatError(false);
    setMatricula(e.target.value);

    if (matricula.length <= 0 || matricula.length > 10) {
      setMatError(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setMatError(false);

    if (!matError) {
      const user = {
        matricula: matricula,
        isStudent: isStudent,
      };

      axios
        .post(`https://api-reto-iot.herokuapp.com/admin`, user)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          alert("Administrador agregado");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Erro ao adicionar usuário!");
        });
    } else {
      console.log("Error");
      alert("matricula invalida");
    }
  };

  return (
    <Box m={4} display="flex" flexDirection="column" className="boxer" position="fixed">
      <Typography gutterBottom variant="h6" color="black" align="left">
        Agregar Administrador
      </Typography>
      <Box mt={1} width="100%">
        <TextField
          id="matricula"
          label="Matricula"
          required={true}
          onChange={onMatriculaChange}
          error={matError}
        />
      </Box>
      <Box mt={1} width="100%">
        <FormControlLabel
          label="¿Es estudiante?"
          control={<Checkbox checked={isStudent} onChange={onStudentChange} />}
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
