//Importações Externas
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector} from 'react-redux';

//Importações Internas
import AddButton from './AddButton'
import { useStyles, Props } from './types';
import BasicCard from '../../components/BasicCard';
import { AppState, Employee } from '../../store/configureStore'; 
const Home = (props: Props): JSX.Element => {
    const classes = useStyles();
    
    const employees: Employee[] = useSelector((state: AppState) => state.employees);

    return (
       
        <div className={classes.root}>
            <Grid container={true} spacing={4} direction="row">
                {employees.map((employee: Employee, idx: number) => { 
                    return (
                        <Grid key={idx} item={true} xs={3}>
                            <BasicCard name = {employee.name} team = {employee.team} email = {employee.email} startDate = {employee.startDate} CPF = {employee.CPF} />
                        </Grid>
                    );
                })}
            </Grid> 
            <Grid container={true} spacing={3} direction="row">
                <Grid item={true} xs={12}>
                    <AddButton/>
                </Grid>
            </Grid>

        </div>
        
    );
};


export default Home;
