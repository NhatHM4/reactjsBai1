import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getQuestionByQuizId, getAllAnswer } from "../../service/apiServices";
import "./DetaiQuiz.scss";
import Question from "./Question";
import _ from "lodash"
const DetailQuiz = () => {
  const param = useParams();
  const quizid = param.id;
  const location = useLocation();
  const [listQuestion, setListQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  // const [item, setItem] = useState({})
  useEffect(() => {
    sumUpQuestion();
  }, [quizid]);


  const sumUpQuestion = async () => {
    let arrQues = await getQuestionByQuizId(quizid);
    let arrAns = await getAllAnswer();
    let result = mergeQuestion(arrQues, arrAns);
    setListQuestion(result)
    // setItem(result[currentQuestion]);
  };

  const mergeQuestion = (arrQues, arrAns) => {
    let arr3 = [];

    for (let i = 0; i < arrQues.length; i++) {
      let answers = [];
      for (let j = 0; j < arrAns.length; j++) {
        if (arrQues[i].id === arrAns[j].questionId) {
          arrAns[j].isSelected= false
          answers.push(arrAns[j]);
        }
      }
      arr3.push({
        question: arrQues[i],
        answer: answers,
        
      });
    }
    return arr3;
  };

  const handleNext = ()=>{
    if (currentQuestion===listQuestion.length-1){
      setCurrentQuestion(listQuestion.length-1)
    } else {
      setCurrentQuestion(currentQuestion+1)
      // setItem(listQuestion[currentQuestion+1]);
    }
  }

  const handlePrevious = ()=>{
    if (currentQuestion===0){
      setCurrentQuestion(0)
    } else {
      setCurrentQuestion(currentQuestion-1)
      // setItem(listQuestion[currentQuestion-1]);
    }
  }

  const handleOnChangeCheckBox = (e,answerId, questionId) =>{
    let listQuestionClone = _.cloneDeep(listQuestion);
    // console.log(listQuestion)
    let item = listQuestionClone.filter(question => +question.question.id === +questionId)
    if (item) {
      let answerNho = item[0].answer.filter(answerNho => +answerNho.id === +answerId)
      if (answerNho){
        answerNho[0].isSelected = e;
        setListQuestion(listQuestionClone)
      }
    }

  }
  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz-{quizid}: {location?.state?.quizTitle}
          <hr />
        </div>
        <Question item={listQuestion && listQuestion.length>0 ? listQuestion[currentQuestion] :{} } questionNumber={currentQuestion} handleOnChangeCheckBox={handleOnChangeCheckBox}/>
        <div className="footer">
          <button className="btn btn-primary" onClick={()=>{handlePrevious()}}>Prev</button>
          <button className="btn btn-dark" onClick={()=>{handleNext()}}>Next</button>
          <button className="btn btn-warning" onClick={()=>{handleNext()}}>Finish</button>
        </div>
      </div>
      <div className="right-content">count down</div>
    </div>
  );
};

export default DetailQuiz;
