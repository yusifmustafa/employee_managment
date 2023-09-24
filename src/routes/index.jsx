import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login_page/LoginPage.jsx";
import NotFound from "../pages/not_found/NotFound.jsx";
import HomePage from "../components/home_page/HomePage.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/homePage",
    element: <HomePage/>,
  },
  {
    path: "/addUser",
    element: "add user",
  },
  {
    path: "/userList",
    element: "user list",
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);
