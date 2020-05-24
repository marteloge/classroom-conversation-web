import React from "react";

import { StyledFinish } from "./Finish.styled";

import clock from "./../static/clock.png";

const Finish = () => (
  <StyledFinish>
    <h1>Friminutt!</h1>
    <h2>Samtalen er nå ferdig. Vil du starte på ny?</h2>
    <img src={clock} alt="Clock icon"></img>
  </StyledFinish>
);

export default Finish;
