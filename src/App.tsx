import React from "react";
import { createGlobalStyle } from "styled-components";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Landingpage from "./Landingpage/Landingpage";
import ConversationComponent from "./Conversation/Conversation";
import Start from "./Start/Start";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #303030;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
  }
  
  h1 {
    font-size: 40px;
  }`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/conversation/:uuid/start" component={Start} />
        <Route
          exact
          path="/conversation/:uuid/question/:id"
          component={ConversationComponent}
        />
      </Switch>
    </Router>
  );
}

export default App;
