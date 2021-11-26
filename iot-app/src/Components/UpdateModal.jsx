import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  field: {
    marginTop: 10,
    marginBottom: 10,
  },
}));

export default function UpdateModal({ idx, verified }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // Title value
  const [matricula, setMatricula] = useState("");
  const [matError, setMatError] = useState(false);
  // Description value
  const [salon, setSalon] = useState("");
  const [salonError, setSalonError] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMatError(false);
    setSalonError(false);

    if (matricula === "") {
      setMatError(true);
    }

    if (isNaN(parseInt(salon)) || salon === "") {
      setSalonError(true);
    }

    if (!matError && !salonError) {
      const data = {
        matricula: matricula,
        idSalon: salon,
      };
      console.log(data);

      axios
        .put(`http://localhost:8000/registros/${idx}`, data)
        .then((res) => {
          alert("Verificacion exitosa");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Error al verificar");
        });
    } else {
      console.log("Error");
      alert("Error, revisa los datos");
    }
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleOpen} disabled={verified}>
        {verified ? "Verificado" : "Verificar"}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant="h6">Add a To-Do</Typography>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                label="Matricula"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setMatricula(e.target.value)}
                error={matError}
                className={classes.field}
              />
              <TextField
                label="Salon"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setSalon(parseInt(e.target.value))}
                error={salonError}
                className={classes.field}
              />
            </form>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              Verificar
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
