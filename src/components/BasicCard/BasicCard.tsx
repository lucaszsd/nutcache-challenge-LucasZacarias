import * as React from 'react';

import {
    Button, Card, CardActions, 
    CardContent, Typography 
} from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { useStyles, Props } from './types';
import DeleteIcon from '@material-ui/icons/Delete';

import { actions } from '../../reducers/employees';
const BasicCard = (props: Props): JSX.Element => {
    const classes = useStyles(); 
    const dispatch = useDispatch()
 
    
    const handleDeleteUser = (): void => {
        dispatch(actions.deleteEmployee('000.000.000-00'));        
    };
  
    return (
        <Card className = {classes.card}>
            <CardContent>
                <Typography variant="h6" component="h2">
                    {props.name}
                </Typography>
                <Typography>
                   {props.team}
                </Typography>
                <Typography>
                    {props.email}
                </Typography>
                <Typography color="textSecondary" component="p">
                    {props.startDate}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                onClick = {handleDeleteUser}
                startIcon={<DeleteIcon />}
                variant="contained"
                color="secondary"
                size="small">
                    Delete
                </Button>
                <Button 
                startIcon={<DeleteIcon />}
                variant="contained"
                color="primary"
                size="small">
                    Edit
                </Button>
            </CardActions>
        </Card>
    );
};

export default BasicCard;
