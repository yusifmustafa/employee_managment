import Navbar from "../navbar/Navbar.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          padding: "0.25rem",
          margin: "0.25rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card col-3">
          <div className="card-body">
            <h4 className="card-title text-center">Admin</h4>
            <div
              style={{ width: "100%", height: "1px", background: "#CFCED0" }}
            />
            <h5 className="card-text pt-4">Total 1</h5>
          </div>
        </div>

        <div
          className="card col-3"
          style={{ marginLeft: "0.85rem", marginRight: "0.85rem" }}
        >
          <div className="card-body">
            <h4 className="card-title text-center">Employee</h4>
            <div
              style={{ width: "100%", height: "1px", background: "#CFCED0" }}
            />
            <h5 className="card-text pt-4">Total 2</h5>
          </div>
        </div>

        <div className="card col-3">
          <div className="card-body">
            <h4 className="card-title text-center">Salary</h4>
            <div
              style={{ width: "100%", height: "1px", background: "#CFCED0" }}
            />
            <h5 className="card-text pt-4">Total 7945</h5>
          </div>
        </div>
      </div>

      <div style={{marginTop:"4%"}}> 
        <h3 className="mt-4 ml-5">List of Admins</h3>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>Admin</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;
