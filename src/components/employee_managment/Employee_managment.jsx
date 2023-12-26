import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EmpManagmentContext } from "../../context/EmpManagmentProvider";

const EmployeeManagment = () => {
  const context = useContext(EmpManagmentContext);
  const { allEmployees, getAllEmps } = context;
  console.log("allEmpss:", allEmployees);
  const navigate = useNavigate();
  const navigateToAddUserPage = () => {
    navigate("/addUser");
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
      <table className="table ml-4">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Salary</th>
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
              <td>
                <button className="btn btn-primary mr-3">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>

            <tr>
              <td scope="row">Peter</td>
              <td>
                <img src="" alt="" className="img-circle" />
              </td>{" "}
              <td>Thornton</td>
              <td>@fat</td>
              <td>4000</td>
              <td>
                <button className="btn btn-primary mr-3">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default EmployeeManagment;
