import React from "react";
import { useParams } from "react-router-dom";

import { useFetchAndStore } from "../hooks";
import { StartNode, UrlParams, Conversation } from "./../types";
import { useHistory } from "react-router-dom";

import Loading from "../Loading/Loading";
import StyledStart from "./Start.styled";

import alarm from "./../static/alarm.png";

const Start = () => {
  const history = useHistory();
  const { uuid } = useParams<UrlParams>();
  const [data, loading] = useFetchAndStore<Conversation>(
    `/api/document/${uuid}`,
    uuid
  );

  if (loading || !data) {
    return <Loading />;
  }

  const startNode: StartNode = data.json.start;

  return (
    <StyledStart>
      <div>
        <h1>{data.name}</h1>
        <p>{startNode.label}</p>

        <img src={alarm}></img>

        <button
          onClick={() =>
            history.push(
              "/conversation/" + uuid + "/question/" + startNode.firstQuestion
            )
          }
        >
          Start matteundervisning
        </button>
      </div>
    </StyledStart>
  );
};

export default Start;
