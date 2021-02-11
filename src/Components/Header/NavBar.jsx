//Importações Externas
import React from "react";
 
import Box from "@material-ui/core/Box"; 
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar, 
  IconButton, Toolbar,
  Typography
}  from '@material-ui/core';
import { connect } from "react-redux";
import AddButton from "../Buttons/AddButton";

import Switch from "@material-ui/core/Switch";
//Importações Internas
import logo from "../../assets/logo.png";
import { changeTheme } from "../../Redux/Theme/ThemeActions";
import { useStyles } from './Style'

function NavBar(props) { 
  const classes = useStyles(); 
  const isHome = props;
  return ( 
      <AppBar position="static">
        <Toolbar className = {classes.menuContent}>
            {/* <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                >
                <MenuIcon />
            </IconButton> */}
            <Typography
            component="div"
            variant="h6"
            color="inherit"
            className={classes.title}
            >
              <div>People Management - Nutcache Brazil</div>
            </Typography> 
            
            <AddButton type = {'nav'}/>
           
            {/* <Box justifyContent="center">
            <Switch checked={props.darkMode} onChange={changeTheme} inputProps={{ "aria-label": "secondary checkbox" }} />
          </Box> */}
        </Toolbar>
      </AppBar>
  
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.Theme.darkMode,
});

export default connect(mapStateToProps, { changeTheme })(NavBar);
