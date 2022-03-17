import { TYPES } from "../../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      img: "https://i0.wp.com/portalgeek.co/wp-content/uploads/2021/02/image003.jpg?resize=476%2C352&ssl=1",
      count: 0,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      img: "http://blog.infotec.com.pe/wp-content/uploads/2019/10/acer-an515-52-51vx-podras-mantenerla-fria-con-sus-2-ventiladores.jpg",
      count: 0,
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      img: "https://jashtechperu.com.pe/wp-content/uploads/2022/02/1.1-MSI-KATANA-GF66-11UE-C17-11800H.jpg",
      count: 0,
    },
    {
      id: 4,
      name: "Product 4",
      price: 40,
      img: "https://compusystemperu.com/wp-content/uploads/2021/03/nitro5i7-1.jpg",
      count: 0,
    },
    {
      id: 5,
      name: "Product 5",
      price: 50,
      img: "https://storage.googleapis.com/zonagamer-pe/2021/08/2268c1fc-pc-gamer-mirage-intel-i5.jpg",
      count: 0,
    },
    {
      id: 6,
      name: "Product 6",
      price: 60,
      img: "https://mipclista.com/2718-home_default/pc-gamer-falkor-ryzen-7-3700x--.jpg",
      count: 0,
    },
    {
      id: 7,
      name: "Product 7",
      price: 70,
      img: "https://media.airedesantafe.com.ar/p/c01baf0faaa944d514b48d3bb25e5e30/adjuntos/268/imagenes/002/927/0002927726/manticore3png.png?0000-00-00-00-00-00",
      count: 0,
    },
    {
      id: 8,
      name: "Product 8",
      price: 80,
      img: "https://m.media-amazon.com/images/I/51JCfx4F+8L.jpg",
      count: 0,
    },
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
