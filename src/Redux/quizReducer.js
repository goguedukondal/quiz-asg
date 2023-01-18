const initialState = {
    currentQues: {
      data: {
        question: "What is capital of America",
        options: ["Rajasthan", "UttarPradesh", "Delhi", "Tamil-Nadu", "UP"],
        anwser: "Delhi"
      },
      s_no: 1
    },
    score: 0,
    submission: [],
    quizStatus: 1
  };
  
  const QuizReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CURRENT_QUES":
        return {
          ...state,
          currentQues: action.payload
        };
  
      case "ADD_SCORE":
        return {
          ...state,
          score: state.score + action.payload
        };
  
      case "ADD_SUBMISSION":
        return {
          ...state,
          submission: [...state.submission, action.payload]
        };
  
      case "SET_QUIZ_STATUS":
        return {
          ...state,
          quizStatus: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default QuizReducer;
  