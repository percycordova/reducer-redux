import {
  DECREMENTAR,
  DECREMENTAR_5,
  INCREMENTAR,
  INCREMENTAR_5,
  RESET,
} from "../types";

const initialState = 0;
export default function contadorReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case DECREMENTAR:
      return state - 1;
    case INCREMENTAR_5:
      return state + action.payload;
    case DECREMENTAR_5:
      return state - action.payload;
    case RESET:
      return initialState;
    default:
      return state;
  }
}
