//Importações Internas
import uniqid from "uniqid";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box"; 
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid"; 
import Button from "@material-ui/core/Button"; 
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import { useParams, useHistory, Link } from "react-router-dom";
 
//Importações Internas
import { useStyles} from './Styles';
// import { listEmployeesApi} from '../../api/listEmployees';
import { updateEmployee } from "../../Redux/Employee/EmployeeActions";

function UpdateForm({ updateEmployee }) {
  const history = useHistory();
  const classes = useStyles();
  const { listId } = useParams();
  const list = useSelector((state) => state.Employee.lists.find((item) => item.id == listId));
  
  const [name, updateName] = useState(list.name);
  const [birthDate, updateBirthDate] = useState(list.birthDate);
  const [gender, updateGender] = useState(list.gender);
  const [email, updateEmail] = useState(list.email);
  const [CPF, updateCPF] = useState(list.CPF);
  const [startDate, updateStartDate] = useState(list.startDate);
  const [team, updateTeam] = useState(list.team);


  // const searchEmployee = async(id) => {
  //   try{
  //     const result = await listEmployeesApi(listId)
  //     console.log("RESULT UNIQUE USER:  " + JSON.stringify(result.data))
  //   }catch(error){
  //     console.log("API ERROR: " + error.messsage)
  //   }
  // }

  useEffect(() => {      
    // searchEmployee(listId)
  }, []);

 
  const submitHandler = () => {
    const newList = {
      id: uniqid(), 
      name: name,
      birthDate: birthDate,
      gender: gender,
      email: email,
      CPF: CPF,
      startDate: startDate,
      team: team,
    };
    updateEmployee(listId, newList);
    history.push("/");
  };

  return (
    <Box className={classes.root}>
      <Grid className={classes.form} container>
        <Box>
          <Grid item xs={12}>
            <TextField className={classes.input} label="Nome" variant="outlined" value={name} onChange={(e) => updateName(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.input} label="Data de Nascimento" variant="outlined" value={birthDate} defaultValue="2017-05-24" type="date" onChange={(e) => updateBirthDate(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            {/* <TextField className={classes.input} label="Genero" variant="outlined" value={gender} onChange={(e) => updateGender(e.target.value)} /> */}
            <Select 
              native
              className={classes.input} 
              variant="outlined"
              value={gender}
              onChange={(e) => updateGender(e.target.value)}
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
            <TextField className={classes.input} label="Email" variant="outlined" value={email} onChange={(e) => updateEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.input} label="CPF" variant="outlined" value={CPF} onChange={(e) => updateCPF(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.input} label="Data de Inicio" variant="outlined" value={startDate} defaultValue="2017-05-24" type="date" onChange={(e) => updateStartDate(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            {/* <TextField className={classes.input} label="Time" variant="outlined" value={team} onChange={(e) => updateTeam(e.target.value)} /> */}
            <Select
              native
              label="Team"
              className={classes.input} 
              variant="outlined"
              value={team}
              onChange={(e) => updateTeam(e.target.value)}
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

export default connect(null, { updateEmployee })(UpdateForm);
