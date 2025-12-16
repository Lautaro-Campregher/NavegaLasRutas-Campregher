import { createContext, useEffect, useState } from "react";

//Contexto
export const cartContext = createContext();

//Provider
const Provider = cartContext.Provider;

//Envolvedor
function CartProvider(props) {
  const [cart, setCart] = useState(() => {
    const cartLs = localStorage.getItem("cart");
    return cartLs ? JSON.parse(cartLs) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);

      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  const totalUnits = cart.reduce((acc, item) => acc + item.quantity, 0);

  //const [total, setTotal] = useState(0);

  //const valueContext = {
  //total: total,
  //setTotal: setTotal,
  //};

  return (
    <Provider value={{ cart, addToCart, totalUnits }}>
      {props.children}
    </Provider>
  );
}

export default CartProvider;
