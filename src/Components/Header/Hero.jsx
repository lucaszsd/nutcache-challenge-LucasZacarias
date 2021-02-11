//Importações Externas
import React from "react";
import { connect } from "react-redux"; 
import Box from "@material-ui/core/Box"; 
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import { motion, AnimatePresence } from "framer-motion";

import Typography from '@material-ui/core/Typography';
//Importações Internas
import { useStyles } from './Style';
import logo from "../../assets/logo.png";
import { changeTheme } from "../../Redux/Theme/ThemeActions";
 
const TRANSITION_TIME_ROTATE_S = 2;
  
function Hero({ darkMode, changeTheme }) {
  const Employee = useSelector((state) => state.Employee);
  const classes = useStyles(); 
  return (
    <div className = {classes.banner}>
      <Grid container className={classes.items}>
       
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: [-6, 0, 6] }}
        transition={{
          duration: 1,
          rotate: { yoyo: Infinity, duration: TRANSITION_TIME_ROTATE_S },
        }}  > 
        <Grid item className={classes.item} xs={12}>
          <Box justifyContent="center">
            <img src={logo} />
          </Box>
        </Grid>
    </motion.div>
        
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.Theme.darkMode,
});

export default connect(mapStateToProps, { changeTheme })(Hero);
