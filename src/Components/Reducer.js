const reducer = (state, action) => {
  switch (action.type) {
    case "WAITING":
      return { ...state, waiting: action.payload };
    case "LOADING":
      return { ...state, loading: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "QUESTIONS":
      return { ...state, questions: action.payload };

    case "SELECTED":
      return { ...state, selected: action.payload };
    case "WARNING":
      return { ...state, warning: action.payload };
    case "DISPLAYRESULT":
      return { ...state, resultDisplay: action.payload };
    case "INDEX":
      const indexx = Number(state.index + 1);
      if (indexx >= 10) {
        return { ...state, index: 0, resultDisplay: true };
      }
      return { ...state, index: indexx };

    case "CORRECT":
      const correctt = state.correct + 1;
      return { ...state, correct: correctt };

    case "RESETCORRECT":
      return { ...state, correct: action.payload };
    case "RESETINDEX":
      return { ...state, index: action.payload };
    default:
      throw new Error();
  }
};

export default reducer;
