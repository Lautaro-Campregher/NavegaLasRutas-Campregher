import { useContext } from "react";
import { cartContext } from "./CartProvider";

function CartWidget() {
  const { totalUnits } = useContext(cartContext);

  return (
    <div>
      🛒
      <span>{totalUnits}</span>
    </div>
  );
}

export default CartWidget;
