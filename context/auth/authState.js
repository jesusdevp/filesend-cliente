import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import { USUARIO_AUTENTICADO, REGISTRO_EXITOSO } from "../../types";
import clienteAxios from "../../config/axios";

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

  // Registrar nuevos usuarios
  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data.msg,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Usuario auntenticado
  const usuarioAutenticado = (nombre) => {
    dispatch({
      type: USUARIO_AUTENTICADO,
      payload: nombre,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        usuarioAutenticado,
        registrarUsuario,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
