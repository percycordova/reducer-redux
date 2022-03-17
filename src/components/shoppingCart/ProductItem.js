import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/shoppingCartActions";
const ProductItem = ({ data }) => {
  const { name, price, img, id } = data;
  const dispatch = useDispatch();
  return (
    <div className="border cart p-4 ">
      <img src={img} alt="img" className="" />
      <h4 className="title-name">{name}</h4>
      <h5 className="title-price">$ {price}.00</h5>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch(addToCart(id))}
      >
        Agregar
      </button>
    </div>
  );
};

export default ProductItem;
