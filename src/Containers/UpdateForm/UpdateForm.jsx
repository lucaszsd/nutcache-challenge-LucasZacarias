import React, { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import uniqid from "uniqid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import AddButton from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import { updateEmployee } from "../../Redux/Employee/EmployeeActions";

const useStyle = makeStyles({
  root: {
    width: "100%",
    marginTop: "1rem",
    borderRadius: "0.5rem",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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

function UpdateForm({ updateEmployee }) {
  const history = useHistory();
  const classes = useStyle();
  const { listId } = useParams();

  const list = useSelector((state) => state.Employee.lists.find((item) => item.id == listId));
 

  const [name, updateName] = useState(list.name);
  const [birthDate, updateBirthDate] = useState(list.birthDate);
  const [gender, updateGender] = useState(list.gender);
  const [email, updateEmail] = useState(list.email);
  const [CPF, updateCPF] = useState(list.CPF);
  const [startDate, updateStartDate] = useState(list.startDate);
  const [team, updateTeam] = useState(list.team);


  // const taskChangeHandler = (event, index) => {
  //   const newTasks = [...tasks];
  //   newTasks[index].title = event.target.value;
  //   setTasks(newTasks);
  // };

  // const addNewTaskHandler = () => {
  //   setTasks([...tasks, { id: uniqid(), title: "", done: false }]);
  // };

  // const deleteTaskInputHandler = (index) => {
  //   const newTasks = [...tasks];
  //   newTasks.splice(index, 1);
  //   setTasks(newTasks);
  // };

  const submitHandler = () => {
    const newList = {
      id: uniqid(),
      // listTitle: title,
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
            <TextField className={classes.input} label="Data de Nascimento" variant="outlined" value={birthDate} onChange={(e) => updateBirthDate(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.input} label="Genero" variant="outlined" value={gender} onChange={(e) => updateGender(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.input} label="Email" variant="outlined" value={email} onChange={(e) => updateEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.input} label="CPF" variant="outlined" value={CPF} onChange={(e) => updateCPF(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.input} label="Data de Inicio" variant="outlined" value={startDate} onChange={(e) => updateStartDate(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.input} label="Time" variant="outlined" value={team} onChange={(e) => updateTeam(e.target.value)} />
          </Grid>
        </Box>
      </Grid>
      <Grid className={classes.form} container>
        {/* {tasks.map((task, index) => (
          <Grid className={classes.flex} item key={index} xs={12}>
            <TextField
              className={classes.input}
              label={`task ${index + 1}`}
              variant="outlined"
              value={task.title}
              onChange={(e) => taskChangeHandler(e, index)}
            />
            <IconButton onClick={() => deleteTaskInputHandler(index)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        ))} */}
        <Grid item xs={12}>
          {/* <IconButton className={classes.button} variant="contained" onClick={addNewTaskHandler}>
            <AddButton />
          </IconButton> */}
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
