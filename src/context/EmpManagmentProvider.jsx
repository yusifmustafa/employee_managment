import React from "react";
import Api from "../utils/Api.js";

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
  file: {},
  allRoles: [],
  openModal: false,
};

const EmpManagmentProvider = (props) => {
  const [state, setState] = React.useState(INITIAL_STATE);
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
        handleOnChangeFile: handleOnChangeFile,
        createNewEmployee: createNewEmployee,
        getAllRoles: getAllRoles,
        deleteEmployee: deleteEmployee,
        getEmployeeById: getEmployeeById,
      }}
    >
      {props.children}
    </EmpManagmentContext.Provider>
  );

  function handleOnChangeAddEmployee(e) {
    const { name, value } = e;
    console.log("onchange icindeki value:", value);

    setState((prev) => ({
      ...prev,
      employee: {
        ...prev.employee,
        [name]: value,
      },
    }));
  }

  function handleOnChangeFile(e) {
    const data = e.target.files[0];

    console.log("data:", data);
    setState((prev) => ({
      ...prev,
      file: {
        name: data.name,
        type: data.type,
        size: data.size,
        data: data,
      },
    }));
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
      setState({ ...state, category: {} });
    });
  }

  function deleteCategory(id) {
    Api.delete(DELETE_CATEGORY_URL.replace("{id}", id)).then(() => {
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
    console.log(employee, "emmppployee");

    const formData = new FormData();
    formData.append("emp_name", employee.emp_name),
      formData.append("emp_email", employee.emp_email),
      formData.append("emp_salary", employee.emp_salary),
      formData.append("emp_address", employee.emp_address),
      formData.append("emp_password", employee.emp_password),
      formData.append("emp_categoryId", employee.emp_categoryId),
      formData.append("emp_roleId", employee.emp_roleId),
      formData.append("emp_image", state.file.data);

    console.log("fomrdata", formData);

    console.log("state file", state.file.data);
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
      getAllEmps();
    });
  }
};

export default EmpManagmentProvider;
