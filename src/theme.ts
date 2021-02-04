import { deepPurple, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = deepPurple;

export default createMuiTheme({
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    palette: {
        type: 'light',
         
        primary: {
            dark: '#3E9BA1',
            light: '#B3F5E0',
            main: '#7CE0D3',
            contrastText: '#000',
        },
        secondary: {
            dark: '#AF1B47',
            light: '#FB8E86',
            main: '#f4364c',
            contrastText: '#fff',
        }, 
    },
    typography: {
        fontFamily: 'Lato, sans-serif',
    },
    spacing: 4,
    
});
