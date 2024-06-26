import { useContext, useEffect } from "react";
import { EmpManagmentContext } from "../../context/EmpManagmentProvider";
import { Dialog } from "@mui/material";
import UpdateEmployee from "../update_employee/UpdateEmployee.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const EmployeeManagment = () => {
  const context = useContext(EmpManagmentContext);
  const {
    allEmployees,
    getAllEmps,
    deleteEmployee,
    getEmployeeById,
    openModal,
    handleOpenAddUserModal,
  } = context;
  useEffect(() => {
    getAllEmps();
  }, []);

  return (
    <div>
      <h3 className="text-center mt-3">Employee List</h3>
      <button
        onClick={() => {
          handleOpenAddUserModal();
        }}
        className="btn btn-success m-4"
      >
        Add Employee
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Salary</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {(allEmployees ? allEmployees : []).map((item, index) => (
          <tbody key={index}>
            <tr>
              <td scope="row">{item.emp_name}</td>
              <td>
                {item.emp_image ? (
                  <img
                    style={{ width: 50, height: 50, borderRadius: "50%" }}
                    src={`http://localhost:5000/Images/` + item.emp_image}
                    alt={`${item.emp_image ? item.emp_name : "empty"}`}
                    className="img-circle"
                  />
                ) : (
                  ""
                )}
              </td>
              <td>{item.emp_email}</td>
              <td>{item.emp_address}</td>
              <td>{item.emp_salary}</td>
              <td>{item.role_name}</td>
              <td>
                <button
                  onClick={() => {
                    getEmployeeById(item.id);
                  }}
                  className="btn btn-primary mr-3"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteEmployee(item.id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Dialog open={openModal}>
        <UpdateEmployee />
      </Dialog>
      <ToastContainer />
    </div>
  );
};

export default EmployeeManagment;
