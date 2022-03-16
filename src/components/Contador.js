import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  restar,
  restar5,
  sumar,
  sumar5,
} from "../actions/contadorActions";

const Contador = () => {
  const state = useSelector((state) => state);
  const { contador } = state;
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Contador Redux</h2>
      <h5>Valor: {contador}</h5>
      <nav className="d-flex gap-5 justify-content-center mt-5">
        <button
          className="btn btn-outline-primary"
          onClick={() => dispatch(sumar5())}
        >
          +5
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => dispatch(sumar())}
        >
          +1
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => dispatch(reset())}
        >
          +0
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => dispatch(restar())}
        >
          -1
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => dispatch(restar5())}
        >
          -5
        </button>
      </nav>
    </div>
  );
};

export default Contador;
