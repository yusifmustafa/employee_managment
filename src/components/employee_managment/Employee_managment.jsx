import { useNavigate } from "react-router-dom";

const EmployeeManagment = () => {
  const navigate = useNavigate();
  const navigateToAddUserPage = () => {
    navigate("/addUser");
  };
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
        <tbody>
          <tr>
            <td scope="row">John</td>
            <td>
              <img src="" alt="" className="img-circle" />
            </td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>3500</td>
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
      </table>
    </div>
  );
};

export default EmployeeManagment;
