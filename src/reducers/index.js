import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";

const rootReducer = combineReducers({
  contador: contadorReducer,
});

export default rootReducer;
