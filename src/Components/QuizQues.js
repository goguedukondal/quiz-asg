import QuizOptions from "./QuizOption";

export default function QuizQues({ quesData, quesNo, totalQues, checkAnswer }) {
  const { question, options } = quesData;

  return (
    <div className="question-container">
      <p >
        Questions {quesNo} out of {totalQues}
      </p>
      <p className="question">{question} ?</p>
      {options.map((item, index) => (
        <QuizOptions value={item} key={index} checkAnswer={checkAnswer} />
      ))}
    </div>
  );
}
