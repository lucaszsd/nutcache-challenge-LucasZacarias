import { makeStyles } from '@material-ui/core';

export interface Props {
    name: string;
    email: string, 
    team: string,
    startDate: string,
}

export const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));