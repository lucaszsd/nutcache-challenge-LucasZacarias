import { makeStyles } from '@material-ui/core';
 
export const useStyles = makeStyles({
    root: {
      width: "100%",
      marginTop: "1rem",
      borderRadius: "0.5rem",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    form: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    input: {
      width: 400,
      margin: "1rem 0",
    },
    link: {
      textDecoration: "none",
    },
    button: {
      margin: "1rem",
    },
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
 
  