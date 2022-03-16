import {TYPES_CONTADOR} from '../../types'


export const initialState = { contador: 0 };
export const init = (initialState) => {
  return {
    contador: initialState.contador + 10,
  };
};


export default function contadorReducer(state, action) {
  switch (action.type) {
    case TYPES_CONTADOR.INCREMENTAR:
      return { contador: state.contador + 1 };
    case TYPES_CONTADOR.DECREMENTAR:
      return { contador: state.contador - 1 };
    case TYPES_CONTADOR.INCREMENTAR_5:
      return { contador: state.contador + action.payload };
    case TYPES_CONTADOR.DECREMENTAR_5:
      return { contador: state.contador - action.payload };
    case TYPES_CONTADOR.RESET:
      return { contador: 0 };

    default:
      return state;
  }
}
