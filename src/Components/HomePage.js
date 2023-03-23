import React from "react";
import { useGlobalContext } from "./Context";

const HomePage = () => {
  const { StartHandler } = useGlobalContext();

  return (
    <>
      {" "}
      <div className="section">
        <div className="home_container">
          <h1>Quiz</h1>{" "}
          <div className="Button">
            {" "}
            <button onClick={StartHandler}>Start</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
