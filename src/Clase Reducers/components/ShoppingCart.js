import React, { useReducer, useState } from "react";
import { TYPES } from "../actions/shoppingActions.js";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer.js";
import ProductCart from "./ProductCart.js";
import ProductItem from "./ProductItem.js";
import Resumen from "./Resumen.js";
import "./shoppingCart.css";
const ShoppingCart = () => {
  const [showResumen, setShowResumen] = useState(false);
  const [{ products, cart }, dispatch] = useReducer(
    shoppingReducer,
    shoppingInitialState
  );

  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id,
    });
  };
  const delFromCart = (id) => {
    dispatch({
      type: TYPES.REMOVE_ONE_FROM_CART,
      payload: id,
    });
  };
  const clearCart = () => {
    dispatch({
      type: TYPES.CLEAR_CART,
    });
  };
  const addCount = (id) => {
    dispatch({
      type: TYPES.ADD_COUNT,
      payload: id,
    });
  };
  const restCount = (id) => {
    dispatch({
      type: TYPES.REST_COUNT,
      payload: id,
    });
  };
  return (
    <div>
      <h2 className="text-center mb-5">Carritos de Compras</h2>
      <h3 className="" style={{ marginLeft: "1rem" }}>
        Productos
      </h3>
      <article className="box grid-responsive">
        {products.map((item) => (
          <ProductItem data={item} addToCart={addToCart} key={item.id} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box grid-responsive">
        {cart.length > 0 ? (
          cart.map((item) => (
            <ProductCart
              data={item}
              key={item.id}
              delFromCart={delFromCart}
              restCount={restCount}
              addCount={addCount}
            />
          ))
        ) : (
          <h4>No hay productos en su carrito</h4>
        )}
      </article>
      <div className="d-flex justify-content-center gap-4">
        <button className="btn btn-outline-success " onClick={clearCart}>
          Limpiar Carrito
        </button>
        <button
          className="btn btn-outline-primary "
          onClick={() => setShowResumen(true)}
        >
          Ver Resumen de tu Compra
        </button>
      </div>
      {showResumen && <Resumen cart={cart} setShowResumen={setShowResumen} />}
    </div>
  );
};

export default ShoppingCart;
