import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import CartView from "../components/NavBar/CartView";

function CartViewContainer() {
  const { cart, resetCart, deleteProduct, totalCart } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [compraData, setCompraData] = useState(null);

  async function handleComprar(e) {
    e.preventDefault();

    if (!nombre || !tel || cart.length === 0) {
      alert("Llene los campos");
      return;
    }

    try {
      const compraRef = collection(db, "Ventas");
      const doc = await addDoc(compraRef, {
        comprador: { nombre, tel },
        items: cart,
        total: totalCart,
      });

      setCompraData({
        nombre,
        tel,
        total: totalCart,
        orderId: doc.id,
      });

      setShowPopUp(true);
      resetCart();
      setNombre("");
      setTel("");
    } catch (error) {
      console.error("Error en compra", error);
    }
  }

  return (
    <CartView
      cart={cart}
      totalCart={totalCart}
      nombre={nombre}
      tel={tel}
      setNombre={setNombre}
      setTel={setTel}
      onResetCart={resetCart}
      onDeleteProduct={deleteProduct}
      onComprar={handleComprar}
      showPopUp={showPopUp}
      compraData={compraData}
      onClosePopUp={() => setShowPopUp(false)}
    />
  );
}

export default CartViewContainer;
