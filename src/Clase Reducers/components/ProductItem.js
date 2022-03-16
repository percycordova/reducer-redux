import React from "react";

const ProductItem = ({ data, addToCart }) => {
  const { name, price, id } = data;
  return (
    <div className="border cart p-4 ">
      <img
        src="https://f.rpp-noticias.io/2021/01/18/1047228202101121653257897jpg.jpg "
        alt="img"
        className=""
      />
      <h4 className="title-name">{name}</h4>
      <h5 className="title-price">$ {price}.00</h5>
      <button className="btn btn-outline-primary" onClick={() => addToCart(id)}>
        Agregar
      </button>
    </div>
  );
};

export default ProductItem;
