import React from "react";

export const EmpManagmentContext = React.createContext({});

const INITIAL_STATE = {};

const EmpManagment = (props) => {
    const [state,setState] = React.useContext(INITIAL_STATE);
  return (
      <EmpManagmentContext.Provider
      value={
          ...state
      }
      >
          {props.children}
      </EmpManagmentContext.Provider>
  )
};

export default EmpManagment;
