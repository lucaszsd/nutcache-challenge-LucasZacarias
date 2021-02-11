//Importações Externas
import React from "react";
import { useSelector } from "react-redux"; 
import { CSSTransition } from "react-transition-group";
import { ThemeProvider } from "@material-ui/core/styles";
import { Switch, Route, Redirect } from "react-router-dom";

//Importações Internas
import Home from "./Containers/Home/Home";
import darkTheme from "./themes/dark-theme";
import lightTheme from "./themes/light-theme";
import Header from "./Components/Header/Header";
import AddForm from "./Containers/AddForm";
import UpdateForm from "./Containers/UpdateForm/UpdateForm";
import UsernameForm from "./Containers/UsernameForm/UsernameForm";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/add", name: "Add", Component: AddForm },
  { path: "/update/:listId", name: "Update", Component: UpdateForm },
];

function App() {
  const username = useSelector((state) => state.Employee.username);
  const darkMode = useSelector((state) => state.Theme.darkMode); 
  return (
    <ThemeProvider theme={lightTheme}> 
      <Header />
      {username ? (
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
      ) : (
        <Switch>
          <Route exact path="/register" component={UsernameForm} />
          <Redirect to="/register" />
        </Switch>
      )} 
    </ThemeProvider>
  );
}

export default App;
