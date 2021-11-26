import React, { useRef, useState } from "react";
import {
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

export default function AddAdmin() {
  const matricula = useRef();
  const [matError, setMatError] = useState(false);
  const [isStudent, setisStudent] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setisStudent(!isStudent);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (matricula.current.value.length === 0) {
      setMatError(true);
    } else {
      console.log(matricula.current.value);
    }
  };

  return (
    <Box m={4} display="flex" flexDirection="column" className="boxer">
      <TextField
        id="matricula"
        label="Matricula"
        required={true}
        inputRef={matricula}
        error={matError}
      />
      <FormControlLabel
        label="¿Es estudiante?"
        control={<Checkbox checked={isStudent} onChange={handleChange} />}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Agregar
      </Button>
    </Box>
  );
}
