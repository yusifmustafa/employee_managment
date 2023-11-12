import React from "react";

export const EmpManagmentContext = React.createContext({});

const INITIAL_STATE = {};

const EmpManagmentProvider = (props) => {
  const [state, setState] = React.useState(INITIAL_STATE);
  return (
    <EmpManagmentContext.Provider
      value={{
        ...state,
      }}
    >
      {props.children}
    </EmpManagmentContext.Provider>
  );
};

export default EmpManagmentProvider;
