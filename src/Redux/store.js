import { createStore } from "redux";
import QuizReducer from "./quizReducer";

const store = createStore(QuizReducer);

export default store;
