import React, { useRef, useState } from "react";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

export default function AddSalon() {
  const numSalon = useRef();
  const [edificio, setEdificio] = useState(1);
  const volumen = useRef();
  const ventanas = useRef();

  const onEdificioChange = (event) => {
    event.preventDefault();
    setEdificio(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(numSalon.current.value);
  };

  return (
    <Box m={4} display="flex" flexDirection="column" className="boxer">
      <TextField
        id="num-salon"
        label="Numero de salon"
        required={true}
        inputRef={numSalon}
      />
      <FormControl fullWidth >
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
      <TextField
        id="volumen"
        label="Volumen"
        required={false}
        inputRef={volumen}
      />
      <TextField
        id="ventanas"
        label="ventanas"
        required={false}
        inputRef={ventanas}
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
