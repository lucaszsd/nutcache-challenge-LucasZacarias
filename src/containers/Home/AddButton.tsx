//Importações Externas
import React, {Fragment} from 'react';
import {
    Grid, Button
} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { useStyles, Props } from './types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from "formik";
//Importações Internas
import { actions } from '../../reducers/employees';
import { AppState, Employee } from '../../store/configureStore';
import AddEmployeeForm from './AddEmployeeForm'
const AddButton = (props: Props): JSX.Element => {
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
        })) 
        handleClose()
    };

    return (
    
            
        <Grid container={true} spacing={3} direction="row">
            <Grid item={true} xs={12}>
                <Button
                variant="contained"
                color="primary"
                // onClick={handleAddNewTaskButton}
                onClick={handleOpen}
                >
                    Add employee
                </Button>
                <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}>  
                    <Fade in={open}>
                        <div className={classes.paper}> 
                            <AddEmployeeForm/> 
                        </div>
                    </Fade> 
                </Modal>
            </Grid>
        </Grid>
      
    );
};


export default AddButton;
