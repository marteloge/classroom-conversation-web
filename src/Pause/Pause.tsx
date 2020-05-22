import React from "react";
import { useHistory } from "react-router-dom";

import { PauseProps } from "./../types";

const Pause = ({ uuid, id, next, current }: PauseProps) => {
  const history = useHistory();

  return (
    <div>
      <h1>{current.label}</h1>
      <button
        onClick={() =>
          history.push("/conversation/" + uuid + "/question/" + id)
        }
      >
        <p>{next.label}</p>
      </button>
    </div>
  );
};

export default Pause;
