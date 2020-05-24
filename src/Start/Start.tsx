import React from "react";
import { useParams } from "react-router-dom";

import { useFetchAndStoreConversation } from "../hooks";
import { removeRecordedConversation } from "./../helpers";
import { StartNode, UrlParams, Conversation } from "./../types";
import { useHistory } from "react-router-dom";

import Loading from "../Loading/Loading";
import StyledStart from "./Start.styled";

import alarm from "./../static/alarm.png";

const Start = () => {
  const history = useHistory();
  const { uuid } = useParams<UrlParams>();
  const [data, loading] = useFetchAndStoreConversation<Conversation>(
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
        <img src={alarm} alt="alarm icon" />
        <button
          onClick={() => {
            removeRecordedConversation();
            history.push(
              "/conversation/" + uuid + "/question/" + startNode.firstQuestion
            );
          }}
        >
          Start matteundervisning
        </button>
      </div>
    </StyledStart>
  );
};

export default Start;
