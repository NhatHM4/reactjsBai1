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

export {postCreateUser}
