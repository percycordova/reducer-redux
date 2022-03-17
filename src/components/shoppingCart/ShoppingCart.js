import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "./ProductCart";
import ProductItem from "./ProductItem";
import Resumen from "./Resumen";
import { clearCart } from "../../actions/shoppingCartActions";
import "./shoppingCart.css";

const ShoppingCart = () => {
  const [showResumen, setShowResumen] = useState(false);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const { cart, products } = shoppingCart;
  const dispatch = useDispatch();

  return (
    <div className="my-5">
      <h1 className="text-center mb-5">Carritos de Compras - Redux</h1>
      <h3 className="" style={{ marginLeft: "1rem" }}>
        Productos
      </h3>
      <article className="box grid-responsive">
        {products.map((item) => (
          <ProductItem data={item} key={item.id} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box grid-responsive">
        {cart.length > 0 ? (
          cart.map((item) => <ProductCart data={item} key={item.id} />)
        ) : (
          <h4>No hay productos en su carrito</h4>
        )}
      </article>

      <div className="d-sm-none d-flex justify-content-center gap-4">
        <button
          className="btn btn-outline-success btn-sm"
          onClick={() => dispatch(clearCart())}
        >
          Limpiar Carrito
        </button>
        <button
          className="btn btn-outline-primary btn-sm "
          onClick={() => setShowResumen(true)}
        >
          Ver Resumen de tu Compra
        </button>
      </div>
      <div className="d-none  d-sm-flex justify-content-center gap-4">
        <button
          className="btn btn-outline-success btn-lg"
          onClick={() => dispatch(clearCart())}
        >
          Limpiar Carrito
        </button>
        <button
          className="btn btn-outline-primary  btn-lg"
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
