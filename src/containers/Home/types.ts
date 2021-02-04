import { makeStyles } from '@material-ui/core';

export interface Props {}

export const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 50,
        paddingLeft: 10,
    },
    card: {
        padding: theme.spacing(4),
    }
}));
