export default function QuizOptions({ value, checkAnswer }) {
    const onClickHandler = () => {
      checkAnswer(value);
    };
  
    return (
      <div className="option-container">
        <p onClick={onClickHandler}>{value}</p>
      </div>
    );
  }
  