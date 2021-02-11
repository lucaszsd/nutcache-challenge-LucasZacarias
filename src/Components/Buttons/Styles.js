import { makeStyles } from '@material-ui/core';

 

export const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 50,
        paddingLeft: 10,
    },
    card: {
        padding: theme.spacing(4),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    
}));
