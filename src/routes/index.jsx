import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login_page/LoginPage.jsx";
import NotFound from "../pages/not_found/NotFound.jsx";
import HomePage from "../components/home_page/HomePage.jsx";
import EmployeeManagment from "../components/employee_managment/employee_managment.jsx";
import Add_employee from "../components/add_employee/Add_employee.jsx";
import Category from "../components/category/Category.jsx";
import Layout from "../layout/Layout.jsx";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<LoginPage />} />
      <Route path="dashboard" element={<HomePage />} />
      <Route path="manageEmployees" element={<EmployeeManagment />} />
      <Route path="userList" element="user list" />
      <Route path="addUser" element={<Add_employee />} />
      <Route path="category" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRouter;
