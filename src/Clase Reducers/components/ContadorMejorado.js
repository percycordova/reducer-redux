import React, { useReducer } from "react";
import contadorReducer, { init, initialState } from "../reducers/contador";
import { TYPES_CONTADOR } from "../types";

const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(contadorReducer, initialState, init);
  const { contador } = state;
  const sumar = () => dispatch({ type: TYPES_CONTADOR.INCREMENTAR });
  const restar = () => dispatch({ type: TYPES_CONTADOR.DECREMENTAR });
  const sumar5 = () =>
    dispatch({ type: TYPES_CONTADOR.INCREMENTAR_5, payload: 5 });
  const restar5 = () =>
    dispatch({ type: TYPES_CONTADOR.DECREMENTAR_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES_CONTADOR.RESET });
  return (
    <div>
      <h2 className="text-center mb-5">Contador Mejorado Reducer</h2>

      <nav className="d-flex justify-content-center gap-2">
        <button className="btn btn-primary" onClick={sumar5}>
          +5
        </button>
        <button className="btn btn-success" onClick={sumar}>
          +
        </button>
        <button className="btn btn-outline-danger" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-success" onClick={restar}>
          -
        </button>
        <button className="btn btn-primary" onClick={restar5}>
          -5
        </button>
      </nav>
      <h3
        className={`${
          contador > 0 ? "text-success" : "text-danger"
        } text-center mt-4`}
      >
        valor: {contador}
      </h3>
    </div>
  );
};

export default ContadorMejorado;
