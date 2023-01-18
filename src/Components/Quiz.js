import QuizQues from "./QuizQues";
import { useEffect } from "react";
import { connect } from "react-redux";


function Quiz({
  currentQues,
  score,
  submission,
  quizStatus,
  setCurrentQues,
  setScore,
  setSubmission,
  setQuizStatus
}) {
  // const[gogu, setGogu] = useState(false);
  let dataset = [
    {
      question: "What is capital of Uttar Pradesh",
      options: ["Rajasthan", "UttarPradesh", "Delhi", "Lucknow"],
      anwser: "Lucknow"
    },
    {
      question: "What is capital of Karnataka",
      options: ["Rajasthan", "UttarPradesh", "Honkong", "Bangalore"],
      anwser: "Bangalore"
    },
    {
      question: "What is capital of Bihar",
      options: ["Rajasthan", "UttarPradesh", "Delhi", "Patna"],
      anwser: "Patna"
    },
    {
      question: "What is capital of Rajashthan",
      options: ["Rajasthan", "Jaipur", "Delhi", "Tamil-Nadu"],
      anwser: "Jaipur"
    },
    {
      question: "What is capital of Maharashtra",
      options: ["Rajasthan", "UttarPradesh", "Mumbai", "Tamil-Nadu"],
      anwser: "Mumbai"
    }
  ];

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  }

  useEffect(()=>{
    // Random Ordering
    // setGogu(true);
    shuffle(dataset)
    setCurrentQues({
      data: dataset[0],
      s_no: 1
    })

      
//eslint-disable-next-line
  },[setCurrentQues]);

  const checkAnswer = (value) => {
    setTimeout(() => {
      if (currentQues.data.anwser === value) {
        //Letting us our status of choosen option
        alert("Your Answer Is Correct");
        //Updating Score
        setScore(5);
        //Keeping Record of each question submision
        setSubmission(true);
      } else {
        //Letting us our status of choosen option
        alert("Your Answer Is Incorrect");
        //Keeping Record of each question submision
        setSubmission(false);
      }
      // Is Quiz End
      if (currentQues.s_no === dataset.length) {
        setQuizStatus(0);
      }
      //Move to next question
      setCurrentQues({
        data: dataset[currentQues.s_no],
        s_no: currentQues.s_no + 1
      });
    }, 2000);
  };

  return (
    <div>
      <h2>State Quiz</h2>
      <p>Current Score: {score}</p>

      {quizStatus ? (
        <QuizQues
          quesData={currentQues.data}
          quesNo={currentQues.s_no}
          totalQues={dataset.length}
          checkAnswer={checkAnswer}
        />
      ) : (
        <div>Quiz Ended</div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentQues: (ques) => {
      dispatch({
        type: "SET_CURRENT_QUES",
        payload: ques
      });
    },
    setScore: (score) => {
      dispatch({
        type: "ADD_SCORE",
        payload: score
      });
    },
    setSubmission: (submision) => {
      dispatch({
        type: "ADD_SUBMISSION",
        payload: submision
      });
    },
    setQuizStatus: (status) => {
      dispatch({
        type: "SET_QUIZ_STATUS",
        payload: status
      });
    }
  };
};

const mapStateToProps = (state) => {
  return {
    currentQues: state.currentQues,
    score: state.score,
    submission: state.submision,
    quizStatus: state.quizStatus
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
