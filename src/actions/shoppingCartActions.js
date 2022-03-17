import { TYPES_CART } from "../types";

export const addToCart = (id) => ({
  type: TYPES_CART.ADD_TO_CART,
  payload: id,
});

export const delFromCart = (id) => ({
  type: TYPES_CART.REMOVE_ONE_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: TYPES_CART.CLEAR_CART,
});

export const addCount = (id) => ({
  type: TYPES_CART.ADD_COUNT,
  payload: id,
});

export const restCount = (id) => ({
  type: TYPES_CART.REST_COUNT,
  payload: id,
});
