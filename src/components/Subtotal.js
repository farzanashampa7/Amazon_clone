import React from "react";
import "./Subtotal.scss";
import { getBasketTotal } from "../reducer";
// import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const value = getBasketTotal(basket);
  return (
    <div className="subtotal">
      {/* <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <> */}
      <p>
        Subtotal ({basket.length} items) : ${" "}
        <strong>{getBasketTotal(basket)}</strong>
      </p>
      <small className="subtotal__gift">
        <input className="subtotal__gift-input" type="checkbox" /> This order
        contains a gift
      </small>
      {/* </>
        )}
      /> */}
      <button className="subtotal__button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
