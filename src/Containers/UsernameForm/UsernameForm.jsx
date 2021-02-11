import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { setUsername } from "../../Redux/Employee/EmployeeActions";

const useStyle = makeStyles((theme) => ({
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
    width: "300px",
    margin: "2rem 0",
    color: "#444",
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
}));

function UsernameForm({ setUsername }) {
  const [username, setUsernameState] = useState("");

  const history = useHistory();

  const classes = useStyle();

  const handleChange = (event) => {
    setUsernameState(event.target.value);
  };

  const handleSubmit = () => {
    setUsername(username);
    history.push("/");
  };

  return (
    <Card>
      <Box className={classes.root}>
        <Grid className={classes.form} container>
          <Box display="flex">
            <Grid item xs={12}>
              <form className={classes.flex} onSubmit={handleSubmit}>
                <TextField variant="outlined" className={classes.input} label="username:" onChange={handleChange} value={username} />
                <Button className={classes.button} variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Card>
  );
}

export default connect(null, { setUsername })(UsernameForm);
