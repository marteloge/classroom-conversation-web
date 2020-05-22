import React from "react";
import { useHistory } from "react-router-dom";

import { Graph, Answer, Answers, Questions } from "../types";

const getRandomAnswer = (
  answers: Answers,
  alternatives: Array<{ id: string }>
): Answer => {
  return answers[
    alternatives[Math.floor(Math.random() * alternatives.length)].id
  ];
};

type Props = {
  graph: Graph;
  uuid: string;
  id: string;
};

const QuestionComponent = ({ graph, uuid, id }: Props) => {
  const history = useHistory();
  const questions: Questions = graph.questions;
  const answers: Answers = graph.answers;
  const question = questions[id];
  const randomAnswer: Answer = getRandomAnswer(answers, question.answers);
  const alternatives: Array<string> = randomAnswer.alternatives;

  return (
    <div>
      <h1>Spørsmål: {question.label}</h1>
      {alternatives.length > 0 && (
        <div>
          <h2>Svar: {answers[randomAnswer.id].label || ""}</h2>
          {alternatives.map((id: string) => (
            <button
              key={id}
              onClick={() =>
                history.push("/conversation/" + uuid + "/question/" + id)
              }
            >
              <p>{questions[id].label}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
