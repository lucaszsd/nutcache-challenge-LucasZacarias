//Importações Externas
import React, { Fragment }from "react";
import { motion } from "framer-motion";
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

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1
    }, 
  }


  return ( 
          <motion.div
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
      <AppBar position="static">
        <Toolbar className = {classes.menuContent}>
              <Typography
              component="div"
              variant="h6"
              color="inherit"
              className={classes.title}
              >
                <motion.div className="item" variants={item}>
                  People Management - Nutcache Brazil 
                </motion.div>
              </Typography> 
         
               
              { Employee[0] != null && 
                <motion.div className="item" variants={item}>
                  <EditButton employeeName = {lastAddEmployee.name} employeeId = {lastAddEmployee.id} type = {'nav'}/>  
                </motion.div>
              }
              <motion.div className="item" variants={item}>
                <DeleteButton employeeName = {lastAddEmployee.name} employeeId = {lastAddEmployee.id} type = {'nav'}/>
              </motion.div>
          
              <motion.div className="item" variants={item}>
                <AddButton type = {'nav'}/>
              </motion.div>
            
          
        </Toolbar>
        </AppBar>
      </motion.div>
  
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.Theme.darkMode,
});

export default connect(mapStateToProps, { changeTheme })(NavBar);
