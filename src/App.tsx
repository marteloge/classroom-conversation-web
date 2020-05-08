import React from "react";
import { createGlobalStyle } from "styled-components";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Landingpage from "./Landingpage/Landingpage";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url("/../public/background.jpg");
    background: darkgray;
    margin: 0;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
  }`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Landingpage} />
      </Switch>
    </Router>
  );
}

export default App;
