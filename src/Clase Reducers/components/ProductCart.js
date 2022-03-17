const ProductCart = ({ data, delFromCart, addCount, restCount }) => {
  const { name, price, id, count, img } = data;
  return (
    <div className="border cart p-2 sm:p-4 position-relative">
      <div
        className="btn btn-danger product-delete"
        onClick={() => delFromCart(id)}
      >
        x
      </div>
      <img
        src={img}
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
