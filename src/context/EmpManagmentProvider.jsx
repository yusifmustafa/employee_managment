import React from "react";
import Api from "../utils/Api.js";
export const EmpManagmentContext = React.createContext({});

const ALL_CATEGORY_URL = "/createcategory/allcategory";

const INITIAL_STATE = {
  allCategories: [],
};

const EmpManagmentProvider = (props) => {
  const [state, setState] = React.useState(INITIAL_STATE);
  return (
    <EmpManagmentContext.Provider
      value={{
        ...state,
        getAllCategories: getAllCategories,
      }}
    >
      {props.children}
    </EmpManagmentContext.Provider>
  );

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
};

export default EmpManagmentProvider;
