import App from "./App";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/home/HomePage";
import ManageUser from "./components/Admin/Content/ManageUser";
import DashBoard from "./components/Admin/Content/DashBoard";
import Login from "./components/Auth/Login";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Register from "./components/Auth/Register";
import ListQuiz from "./components/User/ListQuiz";
const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route path="users" element={<ListQuiz />}></Route>
        </Route>
        <Route path="/admins" element={<Admin />}>
          <Route index element={<DashBoard />}></Route>
          <Route path="manage-users" element={<ManageUser />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Layout;
