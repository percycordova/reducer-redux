import { useDispatch } from "react-redux";
import {
  delFromCart,
  addCount,
  restCount,
} from "../../actions/shoppingCartActions";
const ProductCart = ({ data }) => {
  const { name, price, id, count, img } = data;
  const dispatch = useDispatch();
  return (
    <div className="border cart p-2 sm:p-4 position-relative">
      <div
        className="btn btn-danger product-delete"
        onClick={() => dispatch(delFromCart(id))}
      >
        x
      </div>
      <img src={img} alt="img" className="" />
      <h4 className="title-name">{name}</h4>
      <h5 className="title-price">$ {price}.00</h5>
      <div className="content-btns">
        <button
          className="btn btn-outline-primary "
          onClick={() => dispatch(addCount(id))}
        >
          +
        </button>
        <p className="border ">{count}</p>
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            count > 1 && dispatch(restCount(id));
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default ProductCart;
