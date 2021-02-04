import * as React from 'react';

import {
    Button, Card, CardActions, 
    CardContent, Typography 
} from '@material-ui/core';

import { useStyles, Props } from './types';
import DeleteIcon from '@material-ui/icons/Delete';

const BasicCard = (props: Props): JSX.Element => {
    const classes = useStyles(); 
    return (
        <Card className = {classes.card}>
            <CardContent>
                <Typography variant="h6" component="h2">
                    Lucas Zacarias de Sousa Duarte
                </Typography>
                <Typography>
                   Team One
                </Typography>
                <Typography>
                    lzsd@cin.ufpe.br
                </Typography>
                <Typography color="textSecondary" component="p">
                    05/02/2021
                </Typography>
            </CardContent>
            <CardActions>
                <Button
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
