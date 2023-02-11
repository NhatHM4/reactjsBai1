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

export {postCreateUser, getAllUser, getUserById, putUpdateUser}
