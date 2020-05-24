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

export const selectRandomAnsers = (questions: Questions): Questions => {
  for (let id in questions) {
    questions[id].selectedAnswer = randomAnswer(questions[id].answers);
  }
  return questions;
};

export const addQuestionToConversation = (id: string): void => {
  const conversation: string[] = getRecordedConversation();

  if (conversation.indexOf(id) >= 0) {
    window.localStorage.setItem(
      "conversation",
      JSON.stringify(conversation.slice(0, conversation.indexOf(id) + 1))
    );
  } else {
    conversation.push(id);
    window.localStorage.setItem("conversation", JSON.stringify(conversation));
  }
};

export const getRecordedConversation = (): string[] => {
  const localValue = window.localStorage.getItem("conversation");
  return localValue ? JSON.parse(localValue) : [];
};

export const removeRecordedConversation = () => {
  window.localStorage.removeItem("conversation");
};
