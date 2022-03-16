import { TYPES } from "../../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Product 1", price: 10, count: 0 },
    { id: 2, name: "Product 2", price: 20, count: 0 },
    { id: 3, name: "Product 3", price: 30, count: 0 },
    { id: 4, name: "Product 4", price: 40, count: 0 },
    { id: 5, name: "Product 5", price: 50, count: 0 },
    { id: 6, name: "Product 6", price: 60, count: 0 },
    { id: 7, name: "Product 7", price: 70, count: 0 },
    { id: 8, name: "Product 8", price: 80, count: 0 },

  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const { products, cart } = state;
      const validar = cart.find((item) => item.id === action.payload);
      if (!validar) {
        const product = products.find((item) => item.id === action.payload);
        const newCart = [...cart, { ...product, count: 1 }];
        return {
          ...state,
          cart: newCart,
        };
      } else {
        return {
          ...state,
        };
      }
    }
    case TYPES.ADD_COUNT: {
      const { cart } = state;
      const newCart = cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: newCart,
      };
    }
    case TYPES.REST_COUNT: {
      const { cart } = state;
      const newCart = cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: item.count - 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: newCart,
      };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      const { cart } = state;
      const newCart = cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: newCart,
      };
    }
    case TYPES.CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
}
