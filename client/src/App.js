import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { store } from "./store";
import Main from "../src/views/Main";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route>
          <ModalProvider>
            <Main />
          </ModalProvider>
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
