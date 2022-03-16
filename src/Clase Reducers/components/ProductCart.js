const ProductCart = ({ data, delFromCart, addCount, restCount }) => {
  const { name, price, id, count } = data;
  return (
    <div className="border cart p-4 position-relative">
      <div
        className="btn btn-danger product-delete"
        onClick={() => delFromCart(id)}
      >
        x
      </div>
      <img
        src="https://f.rpp-noticias.io/2021/01/18/1047228202101121653257897jpg.jpg "
        alt="img"
        className=""
      />
      <h4 className="title-name">{name}</h4>
      <h5 className="title-price">$ {price}.00</h5>
      <div className="content-btns">
        <button
          className="btn btn-outline-primary "
          onClick={() => addCount(id)}
        >
          +
        </button>
        <p className="border ">{count}</p>
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            count > 1 && restCount(id);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default ProductCart;
