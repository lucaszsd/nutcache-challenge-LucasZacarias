//Importações Externas
import uniqid from "uniqid";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid"; 
import Button from "@material-ui/core/Button"; 
import { useHistory } from "react-router-dom";
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";

//Importações Internas
import { useStyles } from './Styles';
import {registerApi} from '../../api/addEmployee';
import { addEmployee } from "../../Redux/Employee/EmployeeActions";

function AddForm({ addEmployee }) {
  const classes = useStyles(); 
  const history = useHistory();

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date('2014-08-18T21:11:54'));
  const [gender, setGender] = useState("Fem");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [startDate, setStartDate] = useState(new Date('2014-08-18T21:11:54'));
  const [team, setTeam] = useState("Mobile");
    
  const submitHandler = async() => {  
     //Criando Objeto local
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
  
    try{
      //Enviar pra API
      registerApi(name, birthDate, gender, email, CPF, startDate, team).then(async() =>{
        
        //Adicionando no cache
        addEmployee(newEmployee); 
      })
      
    }catch(error){ 
      console.log("Tivemos um erro: " + error.message)
    } 
     
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
              <TextField className={classes.input} label="Data de Nascimento" variant="outlined" value={birthDate}  defaultValue="2017-05-24" type="date" onChange={(e) => setBirthDate(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField className={classes.input} label="Genero" variant="outlined" value={gender} onChange={(e) => setGender(e.target.value)} />
               */}
                 <Select
                  native
                  label="Genero"
                  className={classes.input} 
                  variant="outlined"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                  }}
                >
                  <option aria-label="Genero" value="" />
                  <option value={'Fem'}>Masculino</option>
                  <option value={'Masc'}>Feminino</option>
                  <option value={'Other'}>Outro</option>
                </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField className={classes.input} label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField className={classes.input} label="CPF" variant="outlined" value={CPF} onChange={(e) => setCPF(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField className={classes.input} label="Data de Inicio" variant="outlined" value={startDate} defaultValue="2017-05-24" type="date" onChange={(e) => setStartDate(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField className={classes.input} label="Time" variant="outlined" value={team} onChange={(e) => setTeam(e.target.value)} /> */}
              <Select
                  native
                  label="Team"
                  className={classes.input} 
                  variant="outlined"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                  }}
                >
                  <option aria-label="Team" value="" />
                  <option value={'Mobile'}>Mobile</option>
                  <option value={'Frontend'}>Frontend</option>
                  <option value={'Backend'}>Backend</option>
                </Select>
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
