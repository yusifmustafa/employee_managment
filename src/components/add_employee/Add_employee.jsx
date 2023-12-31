import { useContext, useEffect } from "react";
import { EmpManagmentContext } from "../../context/EmpManagmentProvider.jsx";

const Add_employee = () => {
  const context = useContext(EmpManagmentContext);
  const {
    handleOnChangeAddEmployee,
    employee,
    createNewEmployee,
    handleOnChangeFile,
    allCategories,
    getAllCategories,
  } = context;
  console.log("employee", employee);
  // console.log("file:", file);
  console.log("emp_category:", employee.emp_categoryId);

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <h3 className="text-center">Add Employee</h3>
      <div
        className="col-12"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            name="emp_name"
            type="emp_name"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => {
              handleOnChangeAddEmployee({
                name: e.target.name,
                value: e.target.value,
              });
            }}
            value={employee.emp_name ? employee.emp_name : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input
            name="emp_email"
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => {
              handleOnChangeAddEmployee({
                name: e.target.name,
                value: e.target.value,
              });
            }}
            value={employee.emp_email ? employee.emp_email : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            name="emp_password"
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(e) => {
              handleOnChangeAddEmployee({
                name: e.target.name,
                value: e.target.value,
              });
            }}
            value={employee.emp_password ? employee.emp_password : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Salary</label>
          <input
            name="emp_salary"
            type="number"
            className="form-control"
            placeholder="Salary"
            onChange={(e) => {
              handleOnChangeAddEmployee({
                name: e.target.name,
                value: e.target.value,
              });
            }}
            value={employee.emp_salary ? employee.emp_salary : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Address</label>
          <input
            name="emp_address"
            type="name"
            className="form-control"
            placeholder="123 Main str."
            onChange={(e) => {
              handleOnChangeAddEmployee({
                name: e.target.name,
                value: e.target.value,
              });
            }}
            value={employee.emp_address ? employee.emp_address : ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Category</label>
          <select
            name="emp_categoryId"
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={(e) => {
              handleOnChangeAddEmployee({
                name: e.target.name,
                value: e.target.value,
              });
            }}
            value={employee.emp_categoryId ? employee.emp_categoryId : ""}
          >
            {allCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category_name}
              </option>
            ))}
          </select>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Example file input</label>
            <input
              name="emp_image"
              type="file"
              className="form-control-file"
              onChange={handleOnChangeFile}
            />
          </div>
        </div>
        <button
          style={{ width: "20%" }}
          className="btn btn-primary"
          onClick={() => {
            createNewEmployee(employee);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Add_employee;
