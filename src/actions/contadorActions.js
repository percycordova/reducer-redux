import {
  DECREMENTAR,
  DECREMENTAR_5,
  INCREMENTAR,
  INCREMENTAR_5,
  RESET,
} from "../types";

export const sumar = () => ({ type: INCREMENTAR });

export const restar = () => ({ type: DECREMENTAR });

export const sumar5 = () => ({ type: INCREMENTAR_5, payload: 5 });

export const restar5 = () => ({ type: DECREMENTAR_5, payload: 5 });

export const reset = () => ({ type: RESET, payload: 0 });
