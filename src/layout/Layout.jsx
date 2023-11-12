import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import EmpManagmentProvider from "../context/EmpManagmentProvider.jsx";
const Layout = () => {
  return (
    <EmpManagmentProvider>
      <Navbar />
      <Outlet />
    </EmpManagmentProvider>
  );
};

export default Layout;
