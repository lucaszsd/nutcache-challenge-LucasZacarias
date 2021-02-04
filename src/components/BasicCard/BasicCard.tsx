import * as React from 'react';

import {
    Button, Card, CardActions, 
    CardContent, Typography 
} from '@material-ui/core';

import { useStyles, Props } from './types';

const BasicCard = (props: Props): JSX.Element => {
    const classes = useStyles(); 
    return (
        <Card>
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
                <Button size="small">Delete</Button>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    );
};

export default BasicCard;
