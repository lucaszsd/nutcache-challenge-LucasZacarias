import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#7CE0D3",
    },
    secondary: {
      main: "#ffca28",
    },
    error: {
      main: "#f4364c",
    },
    info: {
      main: "#CDE0DE",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#fcfcfc",
        color: "#0E0E0E", 
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: "#0E0E0E",
      },
    },
    
    
    MuiInputBase: {
      input: {
        color: "#444",
        borderColor: "#FEFEFE",
      },
    },
    MuiInputLabel: {
      root: {
        color: "#ccc",
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
        color: "#ef8053",
      },
    },
  },
});

export default theme;
