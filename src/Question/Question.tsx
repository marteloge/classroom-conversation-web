import React from "react";
import { useHistory } from "react-router-dom";

import { Graph, Answer, Answers, Questions } from "../types";

import teacher from "./../static/teacher.png";
import student from "./../static/student.png";

import {
  StyledQuestion,
  StyledAlternatives,
  StyledAnswer,
  StyledIcons,
} from "./Question.styled";

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

  console.log(alternatives);

  return (
    <StyledQuestion>
      <StyledAnswer>
        <h2 className="teacher">{question.label}</h2>
        <h2 className="student">{answers[randomAnswer.id].label || ""}</h2>
      </StyledAnswer>

      <StyledAlternatives>
        <StyledIcons>
          <img className="teacher" src={teacher} />
          <img className="student" src={student} />
        </StyledIcons>

        <div className="alternatives">
          {alternatives.length > 0 && (
            <>
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
            </>
          )}
        </div>
      </StyledAlternatives>
    </StyledQuestion>
  );
};

export default QuestionComponent;
