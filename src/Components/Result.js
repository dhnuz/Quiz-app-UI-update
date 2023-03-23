import React from "react";

import { useGlobalContext } from "./Context";

import { PlayCircleOutlined } from "@ant-design/icons";
import ResultRange from "./ResultRange";
const Result = () => {
  const { handleOk, correct, questions } = useGlobalContext();

  const range = (correct / questions.length) * 100;

  return (
    <>
      <div className="section result_section">
        <div className="container result_container">
          <h1 style={{ color: "#000" }}>Your result</h1>
          <div className="results_divide">
            <div>
              {" "}
              <ResultRange score={range} />
            </div>

            <div className="left_divide">
              {" "}
              <div className="result_score green">
                <p
                  style={{ background: "rgb(1, 101, 56,0.7)" }}
                  className="circlee"
                ></p>{" "}
                <p>
                  {" "}
                  {correct}{" "}
                  <span style={{ opacity: "0.5", fontWeight: 600 }}>
                    Correct{" "}
                  </span>
                </p>
              </div>
              <div className="result_score red">
                <p
                  style={{ background: "rgb(255, 0, 8)" }}
                  className="circlee"
                ></p>{" "}
                <p>
                  {" "}
                  {questions.length - correct}{" "}
                  <span style={{ opacity: "0.5", fontWeight: 600 }}>
                    Incorrect{" "}
                  </span>
                </p>{" "}
              </div>
              <button style={{ marginTop: "50px" }} onClick={handleOk}>
                Start again
                {""} <PlayCircleOutlined />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
