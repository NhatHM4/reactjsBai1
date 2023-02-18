import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCreateUser } from "../../service/apiServices";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Email or Password required");
    } else {
      let res = await postCreateUser(email, password, username, "USER", "");
      if (res.status === 201) {
        toast.success("Create user successfully");
        navigate("/");
      } else {
        toast.error("Create user fail!!!. Try again");
        reset();
      }
    }
  };

  const reset = () => {
    setPassword("");
    setUsername("");
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              required
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3 input-with-icon">
            <label>Password</label>
            {isShowPassword ? (
              <AiFillEyeInvisible
                className="input-icon"
                onClick={() => {
                  setIsShowPassword(!isShowPassword);
                }}
              />
            ) : (
              <AiFillEye
                className="input-icon"
                onClick={() => {
                  setIsShowPassword(!isShowPassword);
                }}
              />
            )}
            <input
              required
              type={isShowPassword ? "text" : "password"}
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="username"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
