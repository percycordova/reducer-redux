import { createStore } from "redux";
import rootReducer from "../reducers";
// import amountReducer from "./amount/reducer";
// const reducers = combineReducers({
//   amountReducer,
// });

// export const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(
  rootReducer
);

store.subscribe(() => {
  // console.log(store);
})


export default store
