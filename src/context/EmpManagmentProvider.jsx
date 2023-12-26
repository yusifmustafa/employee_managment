import React from "react";
import Api from "../utils/Api.js";

export const EmpManagmentContext = React.createContext({});

const ALL_CATEGORY_URL = "/api/createcategory/allcategory";
const CREATE_CATEGORY_URL = "/api/createcategory";
const DELETE_CATEGORY_URL = "/api/createcategory/{id}";
const GET_ALL_EMPS = "/api/createuser";
const INITIAL_STATE = {
  allCategories: [],
  allEmployees: [],
  category: {},
  employee: {},
  file: {},
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

  function getAllCategories() {
    Api.get(ALL_CATEGORY_URL)
      .then((rsp) => {
        console.log(rsp.data);
        setState({ ...state, allCategories: rsp.data });
      })
      .catch((err) => {
        console.log("Error fetching categories:", err);
      });
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
      console.log("getAllEmps::", rsp.data);
      setState({ ...state, allEmployees: rsp.data });
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
      formData.append("emp_image", state.file.data);
    console.log(state.file);
    Api.post("/api/createuser", formData).then((rsp) => {
      console.log("createuserden gelen response:", rsp);
      getAllEmps();
    });
  }
};

export default EmpManagmentProvider;
