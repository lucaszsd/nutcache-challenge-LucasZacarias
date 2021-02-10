//Importações Externas
import React from 'react';

import { withConfig } from '../withConfig';
import { useStyles, Props } from './types';

import {
    AppBar, 
    IconButton, Toolbar,
    Typography
}  from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import persistor from '../persist' 
import {PersistGate} from "redux-persist/integration/react"; 
//Importações Internas
import AddButton from './Home/AddButton'
import Home from './Home';

const App = (props: Props): JSX.Element => {
    const classes = useStyles();
    return (
        <PersistGate loading={null} persistor={persistor}>

        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                    component="div"
                    variant="h6"
                    color="inherit"
                    className={classes.flex}
                    >
                        <div>Nutcache People Management</div>
                    </Typography>
                    <AddButton/>
                </Toolbar>
            </AppBar>
            <Home />
        </div>
        </PersistGate>
    );

};

export default withConfig(App);
