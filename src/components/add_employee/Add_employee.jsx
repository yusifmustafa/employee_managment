const Add_employee = () => {
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
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Salary</label>
            <input
              type="number"
              className="form-control"
              placeholder="Salary"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input
              type="name"
              className="form-control"
              placeholder="123 Main str."
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Category</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>IT</option>
              <option>Development</option>
              <option>Designing</option>
              <option>Managment</option>
            </select>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">
                Example file input
              </label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
          </div>
          <button
            style={{ width: "100%" }}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_employee;
