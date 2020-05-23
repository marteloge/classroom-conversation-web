import React from "react";
import { useHistory } from "react-router-dom";

import { PauseProps } from "./../types";

import { StyledPause, StyledAlternatives } from "./Pause.styled";

const Pause = ({ uuid, id, next, current }: PauseProps) => {
  const history = useHistory();

  return (
    <StyledPause>
      <h1>{current.label}</h1>

      <StyledAlternatives>
        <p>Fortsett til neste spørsmål: </p>
        <button
          onClick={() =>
            history.push("/conversation/" + uuid + "/question/" + id)
          }
        >
          {next.label}
        </button>
      </StyledAlternatives>
    </StyledPause>
  );
};

export default Pause;
