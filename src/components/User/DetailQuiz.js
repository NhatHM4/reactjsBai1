import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getQuestionByQuizId, getAllAnswer } from "../../service/apiServices";
import "./DetaiQuiz.scss";
const DetailQuiz = () => {
  const param = useParams();
  const quizid = param.id;
  const location = useLocation();
  const [listQuestion, setListQuestion] = useState([]);
  useEffect(() => {
    sumUpQuestion();
  }, [quizid]);

  // const fetchListQuestion = async()=>{
  //     let data = await getQuestionByQuizId(quizid)
  //     setListQuestion(data)
  // }

  const sumUpQuestion = async () => {
    let arrQues = await getQuestionByQuizId(quizid);
    let arrAns = await getAllAnswer();
    let result = mergeQuestion(arrQues, arrAns);
    setListQuestion(result);
  };

  const mergeQuestion = (arrQues, arrAns) => {
    let arr3 = [];

    for (let i = 0; i < arrQues.length; i++) {
      let answers = [];
      for (let j = 0; j < arrAns.length; j++) {
        if (arrQues[i].id === arrAns[j].questionId) {
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

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz-{quizid}: {location?.state?.quizTitle}
          <hr />
        </div>
        {listQuestion.map((item, index) => {
          return (
            <div key={`q+${index}`}>
              <div className="q-body">
                <img src={item.question.avatar} />
              </div>
              <div className="q-content">
                <div className="question">Q-{index}: {item.question.name}</div>
                {console.log(item.answer)}
                <div className="answer">
                    
                        <div key={`a-${index}`}> {item.answer.map((ite,index)=>{
                            return (
                                <div className="a-chlid">{index}.{ite.answer}</div>
                            )
                        })}
                        </div>
                    
                  
                </div>
              </div>
            </div>
          );
        })}

        <div className="footer">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
      <div className="right-content">count down</div>
    </div>
  );
};

export default DetailQuiz;
