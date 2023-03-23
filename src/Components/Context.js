import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./Reducer";
import { useNavigate } from "react-router-dom";

const url = process.env.REACT_APP_API;
const AppContext = React.createContext();

const initialState = {
  waiting: true,
  loading: false,
  questions: [],
  index: 0,
  correct: 0,
  error: false,
  resultDisplay: false,
  selected: "",
  warning: false,
};

const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);

  const getQuestions = async (url) => {
    dispatch({ type: "WAITING", payload: true });
    dispatch({ type: "LOADING", payload: true });
    const response = await axios(url);
    if (response) {
      const data = response.data.results;

      if (data.length > 0) {
        dispatch({ type: "QUESTIONS", payload: data });
        dispatch({ type: "LOADING", payload: false });
        dispatch({ type: "ERROR", payload: false });
      } else {
        dispatch({ type: "WAITING", payload: true });
        dispatch({ type: "ERROR", payload: true });
      }
    } else {
      dispatch({ type: "WAITING", payload: true });
    }
  };

  const nextQuestion = (a) => {
    checkAnswer(state.selected === a);

    if (state.selected) {
      dispatch({ type: "SELECTED", payload: "" });
      dispatch({ type: "WARNING", payload: false });
      dispatch({ type: "INDEX" });
    } else {
      dispatch({ type: "WARNING", payload: true });
    }
  };

  const checkAnswer = (value) => {
    if (value) {
      dispatch({ type: "CORRECT" });
    }
  };

  const optionHandler = (a) => {
    dispatch({ type: "SELECTED", payload: a });
  };

  const StartHandler = () => {
    dispatch({ type: "WAITING", payload: false });
    if (!state.waiting) navigate("/quiz");
  };

  const handleOk = () => {
    dispatch({ type: "DISPLAYRESULT", payload: false });
    dispatch({ type: "RESETCORRECT", payload: 0 });
    dispatch({ type: "RESETINDEX", payload: 0 });
    navigate("/");
  };

  useEffect(() => {
    getQuestions(url);
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, nextQuestion, optionHandler, StartHandler, handleOk }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
