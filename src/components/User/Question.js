
const Question = (props) => {
  const { item, questionNumber,handleOnChangeCheckBox } = props;

  const handleSelected = (e, questionId, answerId)=>{
    handleOnChangeCheckBox(e.target.checked,questionId, answerId)
    item.isSelected = e.target.checked
  }
  console.log(item)
  return (
    <>
      {!(Object.keys(item).length === 0) && (
        <div>
          <div className="q-body">
            <img src={item.question.avatar} />
          </div>
          <div className="q-content">
            <div className="question">
              Q-{questionNumber + 1}: {item.question.name}
            </div>
            <div className="answer">
              <div>
                {" "}
                {item.answer.map((ite, index) => {
                  return (
                    <div className="a-chlid" key={`q-${index}`}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={(e)=>{handleSelected(e,ite.id, item.question.id)}}
                          
                        />
                        <label className="form-check-label" >
                        {ite.answer}
                        </label>
                      </div>
                      
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
