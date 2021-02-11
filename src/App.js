//Importações Externas
import React from "react"; 
import { Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { ThemeProvider } from "@material-ui/core/styles";

//Importações Internas
import Home from "./Containers/Home/Home"; 
import AddForm from "./Containers/AddForm";
import lightTheme from "./themes/light-theme";
import Header from "./Components/Header/Header";
import UpdateForm from "./Containers/UpdateForm/UpdateForm"; 

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/add", name: "Add", Component: AddForm },
  { path: "/update/:listId", name: "Update", Component: UpdateForm },
];

function App() { 
  return (
    <ThemeProvider theme={lightTheme}> 
      <Header />
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
                <Component />
              </CSSTransition>
            )}
          </Route>
        ))}
      </Switch>
    </ThemeProvider>
  );
}

export default App;
