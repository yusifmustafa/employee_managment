import Navbar from "../components/navbar/Navbar";
import EmpManagmentProvider from "../context/EmpManagmentProvider.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <EmpManagmentProvider>
      <Navbar />
      <Outlet />
    </EmpManagmentProvider>
  );
};

export default Layout;
