import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import { shoppingReducer } from "./shoppingCartReducer";

const rootReducer = combineReducers({
  contador: contadorReducer,
  shoppingCart: shoppingReducer,
});

export default rootReducer;
