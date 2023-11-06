import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login_page/LoginPage.jsx";
import NotFound from "../pages/not_found/NotFound.jsx";
import HomePage from "../components/home_page/HomePage.jsx";
import EmployeeManagment from "../components/employee_managment/employee_managment.jsx";
import Add_employee from "../components/add_employee/Add_employee.jsx";
import Category from "../components/category/Category.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <HomePage />,
  },
  {
    path: "/manageEmployees",
    element: <EmployeeManagment />,
  },
  {
    path: "/userList",
    element: "user list",
  },
  {
    path: "/addUser",
    element: <Add_employee />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
