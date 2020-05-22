import React from "react";
import { useParams } from "react-router-dom";

import { useFetchAndStore } from "../hooks";
import { Conversation, Graph, UrlParams, Question, Questions } from "../types";

import QuestionComponent from "./../Question/Question";
import Finish from "./../Finish/Finish";
import Pause from "./../Pause/Pause";
import Loading from "./../Loading/Loading";

const nodeShape = {
  ROUND_RECTANGLE: "roundrectangle",
  DIAMOND: "diamond",
};

const isConversationFinished = (
  id: string,
  questions: Questions,
  end: string
): boolean => {
  if (id === end) {
    return true;
  }
  const question: Question = questions[id];

  return (
    question &&
    question.answers.length === 1 &&
    (id === end || question.answers[0].id === end)
  );
};

const isNextQuestion = (question: Question): boolean =>
  question.answers.length === 1 &&
  question.answers[0].shape === nodeShape.ROUND_RECTANGLE;

const ConversationComponent = () => {
  const { uuid, id } = useParams<UrlParams>();
  const [data, loading] = useFetchAndStore<Conversation>(
    `/api/document/${uuid}`,
    uuid
  );

  if (!data || loading) {
    return <Loading />;
  }

  const graph: Graph = data.json;
  const questions: Questions = graph.questions;

  if (isConversationFinished(id, questions, graph.end)) {
    return <Finish />;
  }

  const question: Question = questions[id];

  if (isNextQuestion(question)) {
    const nextQuestion: Question = questions[question.answers[0].id];
    return (
      <Pause
        uuid={uuid}
        id={nextQuestion.id}
        current={question}
        next={nextQuestion}
      />
    );
  }
  return <QuestionComponent graph={graph} uuid={uuid} id={id} />;
};

export default ConversationComponent;
