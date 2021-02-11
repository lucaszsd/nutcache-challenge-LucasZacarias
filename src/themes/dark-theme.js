import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#3E9BA1",
    },
    secondary: {
      main: "#ff6f00",
    },
    error: {
      main: "#FD93D5",
    },
    info: {
      main: "#CDE0DE",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#290F66",
        color: "#FEFEFE",
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: "#ccc",
      },
    },
    MuiContainer: {
      root: {
        backgroundColor: "#0F123F",
        margin: "0", 
        minHeight: "100vh",
        fontFamily: `'Londrina Solid', cursive`,
        position: "relative",
      },
    },
    
    MuiInputBase: {
      input: {
        color: "#FEFEFE",
        borderColor: "#FEFEFE",
      },
    },
    MuiInputLabel: {
      root: {
        color: "#ccc",
      },
    },
    MuiTextField: {
      root: {
        border: "1px #ccc",
      },
    },
    MuiFab: {
      root: {
        position: "absolute",
        bottom: 6,
        right: 12,
      },
    },
    MuiIconButton: {
      label: {
        color: "#FD93D5",
      },
    },
  },
});

export default theme;
