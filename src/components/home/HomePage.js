import videoHomePage from "../../assets/123.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomePage = (props) => {
  const isAuth = useSelector(state => state.userReducer.isAuth);
  const user = useSelector(state => state.userReducer.user);
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">There's a better way to ask</div>
        <div className="title-2">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy.
        </div>
        <div className="title-3">
          {!isAuth ?
           <button onClick={()=>{navigate("/login")}}> Do it  </button>
           : 
           <button onClick={()=>{navigate("/users")}}> Get Started. </button>
          }
           
        </div>
      </div>
    </div>
  );
};

export default HomePage;
