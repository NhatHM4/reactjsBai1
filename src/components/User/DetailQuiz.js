import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import { getQuestionByQuizId} from "../../service/apiServices"
const DetailQuiz = () =>{
    const param  = useParams();
    const quizid = param.id;
    const [listQuiz, setListQuiz] = useState("");
    useEffect(()=>{
        fetchListQuiz();
    },[quizid])

    const fetchListQuiz = async()=>{
        let data = await getQuestionByQuizId(quizid)
        console.log(data)
        setListQuiz(data)
    }
    return (
        <div className="detail-quiz-container">
            DetailQuiz
        </div>
    )
}

export default DetailQuiz