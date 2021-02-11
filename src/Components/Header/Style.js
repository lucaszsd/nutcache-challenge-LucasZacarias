import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    root: {
        flexGrow: 1,
    },
    banner: {
        backgroundColor: 'cyan',
        width: '100%',
        padding: theme.spacing(4),
        minHeight: 300,
        backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=600" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // filter: 'blur(8px)'
    },
    items: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: 'transparent'
    },
    item: {
        display: "flex",
        justifyContent: "end",
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: 'red'
       
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    },
    menuContent: {
        marginRight: theme.spacing(4),
        marginLeft: theme.spacing(4),
        // backgroundColor: 'red'
    }
}));