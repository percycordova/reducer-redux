import React from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../../store/amount/action";
const Counter = ({deposit,withdraw}) => {
  return (
    <div>
      <h1>Amount ...</h1>
      <button onClick={() => deposit()}>Deposit $10</button>
      <button onClick={() => withdraw()}>Witdraw $10</button>
    </div>
  );
};

export default connect(null, { deposit, withdraw })(Counter);
