import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { StyledFinish } from "./Finish.styled";

import { removeConversation, getRecordedConversation } from "./../helpers";
import { UrlParams, Questions, Question, Answers, Answer } from "./../types";

import clock from "./../static/clock.png";

import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { backgroundColor: "lightgray" },
  section: { textAlign: "center", margin: 20 },
  question: { fontSize: "18" },
  answer: { fontSize: "14" },
});

type PDFProps = {
  questions: Questions;
  dialog: string[];
  answers: Answers;
};

type FinishProps = {
  questions: Questions;
  answers: Answers;
};

const PDFDocument = ({ questions, dialog, answers }: PDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {dialog.map((q) => {
        const question: Question = questions[q];
        const answer: Answer = answers[questions[q].selectedAnswer];
        return (
          <View style={styles.section}>
            <Text style={styles.question}>{question.label}</Text>
            <Text style={styles.answer}>{answer ? answer.label : ""}</Text>
          </View>
        );
      })}
    </Page>
  </Document>
);

const Finish = ({ questions, answers }: FinishProps) => {
  const history = useHistory();
  const { uuid } = useParams<UrlParams>();

  return (
    <StyledFinish>
      <h1>Friminutt!</h1>
      <h2>Samtalen er nå ferdig</h2>
      <div>
        <button
          onClick={() => {
            removeConversation(uuid);
            history.push("/conversation/" + uuid + "/start");
          }}
        >
          Start samtalen på ny
        </button>

        <PDFDownloadLink
          className="download"
          document={
            <PDFDocument
              questions={questions}
              dialog={getRecordedConversation()}
              answers={answers}
            />
          }
          fileName={"test.pdf"}
        >
          {({ loading }: { loading: boolean }) =>
            loading ? "Loading document..." : "Last ned samtale"
          }
        </PDFDownloadLink>
      </div>

      <img src={clock} alt="Clock icon"></img>
    </StyledFinish>
  );
};

export default Finish;
