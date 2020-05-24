import React from "react";
import { createGlobalStyle } from "styled-components";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Landingpage from "./Landingpage/Landingpage";
import ConversationComponent from "./Conversation/Conversation";
import Start from "./Start/Start";

import background from "./static/background2.png";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }

  body, html, #root {
    width: 100vw;
    min-height: 100vh;
  }

  body {
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    color: #FFFFFF;
    min-width: 100vw;
    min-height: 100vh;
    font-size: 1rem;
  }
  
  h1 {
    font-family: "Gloria Hallelujah", cursive;
    font-size: 2.5rem;
  }

  button {
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: none;
    cursor: pointer;
    background-color: #363334;
    color: white;
    font-size: 1rem;
  }
`;

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
