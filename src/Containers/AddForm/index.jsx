//Importações Externas
import uniqid from "uniqid";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid"; 
import Button from "@material-ui/core/Button"; 
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

//Importações Internas
import { addEmployee } from "../../Redux/Employee/EmployeeActions";

const useStyle = makeStyles({
  root: {
    // width: "100%",
    // marginTop: "1rem",
    // borderRadius: "0.5rem",
    // backgroundColor: "white",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: 'red'
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: 400,
    margin: "1rem 0",
  
  },
  link: {
    textDecoration: "none",
  },
  button: {
    margin: "1rem",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function AddForm({ addEmployee }) {
  const classes = useStyle(); 
  const history = useHistory();

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [startDate, setStartDate] = useState("");
  const [team, setTeam] = useState("");
   
  const submitHandler = () => {
    const newEmployee = {
      id: uniqid(), 
      name: name,
      birthDate: birthDate,
      gender: gender,
      email: email,
      CPF: CPF,
      startDate: startDate,
      team: team, 
    };
    addEmployee(newEmployee);
    history.push("/");
  }; 

  return ( 
      <Box className={classes.root}>
        <Grid className={classes.form} container>
          <Box>
            <Grid item md={12}>
              <TextField className={classes.input} label="Nome" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField className={classes.input} label="Data de Nascimento" variant="outlined" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField className={classes.input} label="Genero" variant="outlined" value={gender} onChange={(e) => setGender(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField className={classes.input} label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField className={classes.input} label="CPF" variant="outlined" value={CPF} onChange={(e) => setCPF(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField className={classes.input} label="Data de Inicio" variant="outlined" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField className={classes.input} label="Time" variant="outlined" value={team} onChange={(e) => setTeam(e.target.value)} />
            </Grid>
          </Box>
        </Grid>
        <Grid className={classes.form} container> 
          <Grid item xs={12}> 
            <Link to="/" className={classes.link}>
              <Button className={classes.button} variant="contained" color="secondary">
                cancel
              </Button>
            </Link>
            <Button className={classes.button} variant="contained" color="primary" onClick={submitHandler}>
              submit
            </Button>
          </Grid>
        </Grid>
      </Box>
     
  );
}

export default connect(null, { addEmployee })(AddForm);
