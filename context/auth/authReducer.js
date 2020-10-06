import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  LIMPIAR_ALERTA,
  LOGIN_ERROR,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
    case REGISTRO_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };
    case LIMPIAR_ALERTA:
      return {
        ...state,
        mensaje: null,
      };
    default:
      return state;
  }
};
