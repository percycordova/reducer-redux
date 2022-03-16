import React, { useReducer } from "react";

const initialState = { contador: 0 };
const init = (initialState) => {
  return {
    contador: initialState.contador + 10,
  };
};
const TYPES = {
  INCREMENTAR: "INCREMENTAR",
  DECREMENTAR: "DECREMENTAR",
  INCREMENTAR_5: "INCREMENTAR_5",
  DECREMENTAR_5: "DECREMENTAR_5",
  RESET: "RESET",
};
const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.INCREMENTAR:
      return { contador: state.contador + 1 };
    case TYPES.DECREMENTAR:
      return { contador: state.contador - 1 };
    case TYPES.INCREMENTAR_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENTAR_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return { contador: 0 };

    default:
      return state;
  }
};
const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const { contador } = state;
  const sumar = () => dispatch({ type: "INCREMENTAR" });
  const restar = () => dispatch({ type: "DECREMENTAR" });
  const sumar5 = () => dispatch({ type: "INCREMENTAR_5", payload: 5 });
  const restar5 = () => dispatch({ type: "DECREMENTAR_5", payload: 5 });
  const reset = () => dispatch({ type: "RESET" });
  return (
    <div>
      <h2 className="text-center mb-5">Contador Reducer</h2>

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

export default Contador;
