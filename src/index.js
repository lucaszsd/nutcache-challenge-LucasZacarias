import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import store from "./Redux/store";
import { persistor } from "./Redux/store";
import "./index.css";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();
