import React from "react";
import { Provider } from "react-redux";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
// import ClaseReducer from "./Clase Reducers";
// import Contador from "./components/Contador";
// import TeoriaRedux from "./components/TeoriaRedux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div >
        <ShoppingCart/>
        {/* <Contador/> */}
        {/* <hr />
        <TeoriaRedux /> */}
      </div>
    </Provider>
  );
}

export default App;
