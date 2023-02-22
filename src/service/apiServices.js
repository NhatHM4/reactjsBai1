import axios from "../utils/axiosCustomize";

const postCreateUser = (email, password, userName, role, image) => {
  let data = {
    email: email,
    password: password,
    username: userName,
    role: role,
    image: image,
    createAt: new Date().toLocaleString(),
  };

  return axios.post("/Partincipant",data);
};


const getAllUser = ()=>{
  return axios.get("/Partincipant");
}

const getUserById = (id)=>{
  return axios.get(`/Partincipant/${id}`);
}

const putUpdateUser = (id,email, password, userName, role, image) => {
  let data = {
    email: email,
    password: password,
    username: userName,
    role: role,
    image: image,
    createAt: new Date().toLocaleString(),
  };

  return axios.put(`/Partincipant/${id}`,data);
};

const deleteUserById = (id)=>{
  return axios.delete(`/Partincipant/${id}`);
}

const checkLogin = async (obj) =>{
    let res = await getAllUser();
    
    return checkObjectContainArr(res.data, obj)
}

const checkObjectContainArr = (arrayOfObjects, objectToCheck) =>{
  let objLogin = {
    DT: {},
    EC:1,
    EM:"Login Fail"
  }
  arrayOfObjects.some(obj => {
    const keys = Object.keys(obj);
   
    if (keys.length > 3 && keys.includes("email") && keys.includes("password") && obj.email === objectToCheck.email && obj.password === objectToCheck.password){
      objLogin = {
        DT: obj,
        EC: 0,
        EM: "Login Success"
      }
      return true
    }
    return false;
  });
  
  return objLogin;
}

const getQuizByUser = (id) =>{
  return axios.get("/QuizParticitpant")
}

export {postCreateUser, getAllUser, getUserById, putUpdateUser, deleteUserById, checkLogin}
