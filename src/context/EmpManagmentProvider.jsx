import React from "react";
import Api from "../utils/Api.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const EmpManagmentContext = React.createContext({});

const ALL_CATEGORY_URL = "/api/createcategory/allcategory";
const CREATE_CATEGORY_URL = "/api/createcategory";
const DELETE_CATEGORY_URL = "/api/createcategory/{id}";
const GET_ALL_EMPS = "/api/createuser";
const GET_ALL_ROLES = "/api/role";
const INITIAL_STATE = {
  allCategories: [],
  allEmployees: [],
  category: {},
  employee: {},
  authUser: {},
  allRoles: [],
  openModal: false,
  isLoggedIn: false,
  roleId: null,
  loggedUser: {},
};

const EmpManagmentProvider = (props) => {
  const [state, setState] = React.useState(INITIAL_STATE);

  const navigate = useNavigate();

  return (
    <EmpManagmentContext.Provider
      value={{
        ...state,
        getAllCategories: getAllCategories,
        handleOnChangeAddCategory: handleOnChangeAddCategory,
        createNewCategory: createNewCategory,
        deleteCategory: deleteCategory,
        handleOnChangeAddEmployee: handleOnChangeAddEmployee,
        getAllEmps: getAllEmps,
        createNewEmployee: createNewEmployee,
        getAllRoles: getAllRoles,
        deleteEmployee: deleteEmployee,
        getEmployeeById: getEmployeeById,
        handleClose: handleClose,
        updateEmployee: updateEmployee,
        handleOpenAddUserModal: handleOpenAddUserModal,
        handleAuthLogin: handleAuthLogin,
        handleOnChangeAuthLogin: handleOnChangeAuthLogin,
      }}
    >
      {props.children}
    </EmpManagmentContext.Provider>
  );

  function handleOnChangeAuthLogin(e) {
    const { name, value } = e;
    setState((prev) => ({
      ...prev,
      authUser: {
        ...prev.authUser,
        [name]: value,
      },
    }));
  }

  function handleOnChangeAddEmployee(e) {
    const { name, value, type } = e;

    if (type === "change") {
      setState((prev) => ({
        ...prev,
        employee: {
          ...prev.employee,
          emp_image: e.target.files[0],
        },
      }));
    } else {
      setState((prev) => ({
        ...prev,
        employee: {
          ...prev.employee,
          [name]: value,
        },
      }));
    }
  }

  function handleClose() {
    setState({ ...state, openModal: false });
  }

  function handleOpenAddUserModal() {
    navigate("/addUser");
  }

  function handleOnChangeAddCategory(e) {
    const { name, value } = e;
    setState((prev) => ({
      ...prev,
      category: {
        ...prev.category,
        [name]: value,
      },
    }));
  }

  function createNewCategory(newCategory) {
    Api.post(CREATE_CATEGORY_URL, newCategory).then(() => {
      getAllCategories();
      const notify = () => {
        toast.success("Yeni kategoriya yaradıldı");
      };
      notify();
      setState({ ...state, category: {}, open: false });
    });
  }

  function deleteCategory(id) {
    Api.delete(DELETE_CATEGORY_URL.replace("{id}", id)).then(() => {
      const notify = () => {
        toast.success("Uğurla silindi");
      };
      notify();
      getAllCategories();
    });
  }

  function getAllEmps() {
    Api.get(GET_ALL_EMPS).then((rsp) => {
      console.log("getAllEmps:", rsp.data);
      setState((prev) => {
        console.log("getAllEmps prev:", prev);
        return {
          ...prev,
          allEmployees: rsp.data,
        };
      });
    });
  }

  function getEmployeeById(id) {
    Api.get(`/api/createuser/${id}`).then((rsp) => {
      console.log("getEmpById:", rsp.data);
      const responseData = rsp?.data;
      responseData.map((item) => {
        const obj = {
          id: item.id,
          emp_name: item.emp_name,
          emp_email: item.emp_email,
          emp_salary: item.emp_salary,
          emp_address: item.emp_address,
          emp_password: item.emp_password,
          emp_categoryId: item.emp_categoryId,
          emp_roleId: item.emp_roleId,
          emp_image: item.emp_image,
        };
        setState({ ...state, employee: obj, openModal: true });
      });
    });
  }

  function createNewEmployee(employee) {
    const formData = new FormData();
    formData.append("emp_name", employee.emp_name),
      formData.append("emp_email", employee.emp_email),
      formData.append("emp_salary", employee.emp_salary),
      formData.append("emp_address", employee.emp_address),
      formData.append("emp_password", employee.emp_password),
      formData.append("emp_categoryId", employee.emp_categoryId),
      formData.append("emp_roleId", employee.emp_roleId),
      formData.append("emp_image", employee.emp_image);

    console.log("fomrdata", formData);

    Api.post("/api/createuser", formData).then((rsp) => {
      console.log("createuserden gelen response:", rsp);
      getAllEmps();
    });
  }

  async function getAllRoles() {
    console.log(state);
    await Api.get(GET_ALL_ROLES).then((rsp) => {
      if (rsp) {
        console.log("prev state", state);
        setState((prev) => {
          console.log("getAllRolesPrev", prev);
          return {
            ...prev,
            allRoles: rsp.data,
          };
        });
      }
    });
  }

  async function getAllCategories() {
    await Api.get(ALL_CATEGORY_URL)
      .then((rsp) => {
        console.log("Categories rsp.data:", rsp.data);
        setState((prev) => ({
          ...prev,
          allCategories: rsp.data,
        }));
        console.log("getALlCategories State:::", state);
      })
      .catch((err) => {
        console.log("Error fetching categories:", err);
      });
  }

  function deleteEmployee(id) {
    Api.delete(`http://localhost:5000/api/createuser/${id}`).then((rsp) => {
      console.log(rsp);
      if (rsp.data === "OK") {
        const notify = () => {
          toast.success("Uğurla silindi");
        };
        getAllEmps();
        notify();
      } else {
        const notify = () => {
          toast.error("Xəta baş verdi");
        };
        notify();
      }
    });
  }

  function updateEmployee(emp_id, employee) {
    console.log("empPut:", employee);
    Api.put(`http://localhost:5000/api/createuser/${emp_id}`, employee).then(
      (rsp) => {
        if (rsp.data) {
          const notify = () => {
            toast.success("Dəyişikliklər qeydə alındı");
          };
          notify();
          setState({ ...state, openModal: false });
          setState((prev) => ({
            ...prev,
            employee: rsp.data,
          }));
          getAllEmps();
        } else {
          const notify = () => {
            toast.error("Xəta baş verdi");
          };
          notify();
        }
      },
    );
  }

  async function handleAuthLogin(authUser) {
    console.log(authUser);
    await Api.post("/api/authuser", authUser).then((rsp) => {
      if (rsp.data.status === true) {
        setState({
          ...state,
          isLoggedIn: true,
          roleId: rsp.data.emp_roleId,
          loggedUser: rsp.data.user,
        });
        localStorage.setItem("token", rsp.data.token);
      }
      console.log(rsp.data);
    });
  }
};

export default EmpManagmentProvider;
