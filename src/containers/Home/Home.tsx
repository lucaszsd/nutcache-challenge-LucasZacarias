import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Grid, Button
} from '@material-ui/core';

import { useStyles, Props } from './types';
import { AppState, Employee } from '../../store/configureStore';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import BasicCard from '../../components/BasicCard';
import { actions } from '../../reducers/employees';
import AddButton from './AddButton'
const Home = (props: Props): JSX.Element => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const employees: Employee[] = useSelector((state: AppState) => state.employees);
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const handleAddNewTaskButton = (): void => {
        dispatch(actions.addEmployees({
            name: 'Lucas Zacarias ' + Math.floor((Math.random() * 1000)),
            birthDate: '02/01/1996',
            gender: 'Masc',
            email: 'lzsd@cin.ufpe.br',
            CPF: '000.000.000-00',
            startDate: '05/02/2021',
            team: 'Dev',
        }));        
    };

    return (
        <div className={classes.root}>
            <Grid container={true} spacing={4} direction="row">
                {employees.map((employee: Employee, idx: number) => { 
                    return (
                        <Grid key={idx} item={true} xs={3}>
                            <BasicCard name = {employee.name} />
                        </Grid>
                    );
                })}
            </Grid>
            {/* <Grid container={true} spacing={3} direction="row">
                <Grid item={true} xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddNewTaskButton}
                    >
                        Add employee
                    </Button>
                    
                </Grid>
            </Grid> */}
            <AddButton/>
        </div>
    );
};


export default Home;
