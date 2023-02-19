import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../service/apiServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      email: email,
      password: password,
    };
    let result = await checkLogin(user);
    if (result.EC === 0) {
      dispatch(doLogin(result));
      toast.success(result.EM);
      navigate("/");
    } else {
      toast.error(result.EM);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={handleSubmit} className="btn btn-primary">
              Login
            </button>
          </div>
          <div>
            <button
              className="btn btn-dark"
              onClick={() => {
                navigate("/");
              }}
            >
              Back to Home Page
            </button>
            <button
              className="btn btn-info mx-1"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
