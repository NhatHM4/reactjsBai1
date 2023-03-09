import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getQuizByUser } from "../../service/apiServices";
import { useNavigate } from "react-router-dom";
import './ListQuiz.scss'
const ListQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);
  const user = useSelector((state) => state.userReducer.user);
  const navigate  = useNavigate();
  const getListQuiz = async () => {
    let data = await getQuizByUser(user.id);
    setListQuiz(data);
  };
  useEffect(() => {
    getListQuiz();
  }, []);
  return (
    <div className="list-quiz container">
      {listQuiz.map((obj,index) => {
        return (
          
            <div key={`${index}-quiz`} className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={obj.avatar}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{obj.name}</h5>
                <p className="card-text">{obj.Decription}</p>
                <button className="btn btn-primary" onClick={()=>{navigate(`/quiz/${obj.quizId}`)}}>
                  Go somewhere
                </button>
              </div>
            </div>
          
        );
      })}
    </div>
  );
};

export default ListQuiz;
