import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmpManagmentContext } from "../../context/EmpManagmentProvider";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const EmployeeManagment = () => {
  const [open, setOpen] = useState(false);

  const context = useContext(EmpManagmentContext);
  const { allEmployees, getAllEmps, deleteEmployee } = context;
  console.log("allEmpss:", allEmployees);
  const navigate = useNavigate();
  const navigateToAddUserPage = () => {
    navigate("/addUser");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    getAllEmps();
  }, []);

  return (
    <div>
      <h3 className="text-center mt-3">Employee List</h3>
      <button onClick={navigateToAddUserPage} className="btn btn-success m-4">
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
                <button className="btn btn-primary mr-3">Edit</button>
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Diqqət!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Seçdiyiniz şəxsin məlumatları silinəcək
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İmtina et</Button>
          <Button onClick={handleClose} autoFocus>
            Davam et
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmployeeManagment;
