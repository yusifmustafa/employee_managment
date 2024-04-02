import LoginPage from "../pages/login_page/LoginPage.jsx";
import { Dashboard } from "@mui/icons-material";
import Add_employee from "../components/add_employee/Add_employee.jsx";
import EmployeeManagment from "../components/employee_managment/Employee_managment.jsx";
import Category from "../components/category/Category.jsx";
import NotFound from "../pages/not_found/NotFound.jsx";

const token = localStorage.getItem("token");
console.log("localstoragedeki token", token);

export const nav = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/homePage",
    element: <Dashboard />,
  },
  {
    path: "/addUser",
    element: <Add_employee />,
  },
  // {
  //   path: "/userList",
  //   element: "user list",
  // },
  {
    path: "/manageEmployees",
    element: <EmployeeManagment />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
