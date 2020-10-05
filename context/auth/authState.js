import React, { useReducer } from "react";
import authContext from "./authContext";

const AuthState = ({ children }) => {
  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
};

export default AuthState;
