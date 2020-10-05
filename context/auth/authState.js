import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = ({ children }) => {
  // State Inicial
  const initialState = {
    token: "",
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  // Definir el reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
