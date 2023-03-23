import React from "react";
import { useGlobalContext } from "./Context";
import HomePage from "./HomePage";
import Loading from "./Loading";
import Result from "./Result";
import Score from "./Score";
import { ArrowRightOutlined } from "@ant-design/icons";
import Checkbox from "@mui/material/Checkbox";

const Quiz = () => {
  const {
    selected,
    optionHandler,
    waiting,
    loading,
    questions,
    index,
    warning,
    nextQuestion,
    resultDisplay,
  } = useGlobalContext();

  if (waiting) {
    return <HomePage />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];

  const answers = [...incorrect_answers, correct_answer];

  return (
    <>
      {" "}
      {resultDisplay ? (
        <Result />
      ) : (
        <div className="quiz_section">
          <div className="quiz_container">
            <Score />

            <h2 dangerouslySetInnerHTML={{ __html: question }} />
            {warning ? (
              <span style={{ color: "red" }}> Please select an option </span>
            ) : (
              ""
            )}
            <ul>
              {answers.map((a, i) => (
                <li
                  onClick={() => optionHandler(a)}
                  key={i}
                  className={`${selected === a ? "active" : ""}`}
                >
                  <Checkbox
                    checked={selected === a}
                    inputProps={{ "aria-label": "controlled" }}
                    style={{
                      borderRadius: "10px",
                      color: `${
                        selected === a ? "rgb(0, 218, 152, 1.5)" : "#fff"
                      }`,
                    }}
                  />
                  {a}
                </li>
              ))}
            </ul>
            <div className="Button">
              {" "}
              <button onClick={() => nextQuestion(correct_answer)}>
                Next <ArrowRightOutlined />{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
