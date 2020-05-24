import { Questions, Question, Answers } from "./types";

export const next = () => {};

export const isFinishNode = (id: string, endNode: string) => id === endNode;

export const calculateResponsiveSize = (min: number, max: number) =>
  `calc(${min}px + (${max} - ${min}) * ((100vw - 300px) / (1600 - 300)))`;

export const randomAnswer = (
  answers: Array<{
    id: string;
  }>
) => {
  return answers[Math.floor(Math.random() * answers.length)].id;
};

export const selectRandomAnsers = (questions: Questions) => {
  for (let id in questions) {
    questions[id].selectedAnswer = randomAnswer(questions[id].answers);
  }
  return questions;
};
