import React from "react";
import Api from "../utils/Api.js";

export const EmpManagmentContext = React.createContext({});

const ALL_CATEGORY_URL = "/createcategory/allcategory";
const CREATE_CATEGORY_URL = "/createcategory";
const DELETE_CATEGORY_URL = "/createcategory/{id}";
const INITIAL_STATE = {
  allCategories: [],
  category: {},
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
      }}
    >
      {props.children}
    </EmpManagmentContext.Provider>
  );

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
};

export default EmpManagmentProvider;
