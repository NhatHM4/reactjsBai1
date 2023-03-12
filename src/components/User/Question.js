import { useEffect,useState } from "react";
const Question = (props)=>{
    const {item,questionNumber} = props;
    const [question,setQuestion] = useState(item)
    useEffect(() => {
        setQuestion(item)
    }, [item]);

    return (
        <>
        {!(Object.keys(question).length === 0) && 
            <div >
            <div className="q-body">
              <img src={question.question.avatar} />
            </div>
            <div className="q-content">
              <div className="question">
                Q-{questionNumber+1}: {question.question.name}
              </div>
              <div className="answer">
                <div>
                  {" "}
                  {question.answer.map((ite, index) => {
                    return (
                      <div className="a-chlid" key={`q-${index}`}>
                        {index}.{ite.answer}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        }
             
        </>
    )
}

export default Question