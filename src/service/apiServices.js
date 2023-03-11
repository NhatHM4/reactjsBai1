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

  return axios.post("63b28a190d51f5b2972b9419.mockapi.io/Partincipant",data);
};


const getAllUser = ()=>{
  return axios.get("63b28a190d51f5b2972b9419.mockapi.io/Partincipant");
}

const getUserById = (id)=>{
  return axios.get(`63b28a190d51f5b2972b9419.mockapi.io/Partincipant/${id}`);
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

  return axios.put(`63b28a190d51f5b2972b9419.mockapi.io/Partincipant/${id}`,data);
};

const deleteUserById = (id)=>{
  return axios.delete(`63b28a190d51f5b2972b9419.mockapi.io/Partincipant/${id}`);
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

const getQuizByUser = async(id) =>{
  let res = await axios.get(`63b28a190d51f5b2972b9419.mockapi.io/ParticipantQuiz`);
  return res.data.filter(obj => obj.ParticipantID === id)
}

const getQuestionByQuizId = async(id) =>{
  let res = await axios.get(`63b2994c5e490925c51c75bf.mockapi.io/api/Question`);
  return res.data.filter(obj => obj.QuizId===id)
}

const getAllAnswer = async() =>{
  let res = await axios.get(`640c345094ce1239b0a7b46c.mockapi.io/answer/answer`);
  return res.data;
}

export {postCreateUser, getAllUser, getUserById, putUpdateUser, deleteUserById, checkLogin, getQuizByUser, getQuestionByQuizId, getAllAnswer}
