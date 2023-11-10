import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { EmpManagmentContext } from "../context/EmpManagment.jsx";
const Layout = () => {
  return (
    <EmpManagmentContext>
      <Navbar />
      <Outlet />
    </EmpManagmentContext>
  );
};

export default Layout;
