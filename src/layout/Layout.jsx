import Navbar from "../components/navbar/Navbar";
import EmpManagmentProvider from "../context/EmpManagmentProvider.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { nav } from "../routes/index.jsx";

const Layout = () => {
  return (
    <EmpManagmentProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        {nav.map((item, key) => {
          console.log(item);
          return (
            <Route key={key} element={item.element} path={item.path}></Route>
          );
        })}
      </Routes>
    </EmpManagmentProvider>
  );
};

export default Layout;
