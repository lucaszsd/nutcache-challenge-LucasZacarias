//Importações Externas
import React, { Fragment }from "react";
 
import Box from "@material-ui/core/Box"; 
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar, 
  Button, Toolbar,
  Typography
}  from '@material-ui/core';
import { connect } from "react-redux";
import AddButton from "../Buttons/AddButton";

import { useSelector } from "react-redux";
import Switch from "@material-ui/core/Switch";
//Importações Internas
import logo from "../../assets/logo.png";
import { changeTheme } from "../../Redux/Theme/ThemeActions";
import { useStyles } from './Style'
import EditButton from '../Buttons/EditButton'
import DeleteButton from '../Buttons/DeleteButton'
function NavBar(props) { 
  const classes = useStyles(); 
  const isHome = props;
  
  const Employee = useSelector((state) => state.Employee.lists);
  const lastAddEmployee = Employee[0]
  return ( 
      <AppBar position="static">
        <Toolbar className = {classes.menuContent}>
            <Typography
            component="div"
            variant="h6"
            color="inherit"
            className={classes.title}
            >
              People Management - Nutcache Brazil 
            </Typography> 
            { Employee[0] != null && 
            <Fragment> 
              <EditButton employeeName = {lastAddEmployee.name} employeeId = {lastAddEmployee.id} type = {'nav'}/>
              <DeleteButton employeeName = {lastAddEmployee.name} employeeId = {lastAddEmployee.id} type = {'nav'}/>
            </Fragment>
            }
            <AddButton type = {'nav'}/>
          
        </Toolbar>
      </AppBar>
  
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.Theme.darkMode,
});

export default connect(mapStateToProps, { changeTheme })(NavBar);
