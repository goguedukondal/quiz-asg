import Quiz from "./Components/Quiz";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>QUIZ APPLICATION</h1>
        <Quiz />
      </div>
    </Provider>
  );
}
