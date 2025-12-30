import PopUp from "../Carrito/PopUp";

function CartView({
  cart,
  totalCart,
  nombre,
  tel,
  setNombre,
  setTel,
  onResetCart,
  onDeleteProduct,
  onComprar,
  showPopUp,
  compraData,
  onClosePopUp,
}) {
  return (
    <div className="container">
      {showPopUp && compraData && (
        <PopUp
          nombre={compraData.nombre}
          tel={compraData.tel}
          total={compraData.total}
          orderId={compraData.orderId}
          onClose={onClosePopUp}
        />
      )}

      <h1>Carrito</h1>

      {cart.length > 0 && <button onClick={onResetCart}>Vaciar carrito</button>}

      <p>Total: ${totalCart.toFixed(2)}</p>

      <div className="carrito">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.title}</h3>
              <img src={item.img} alt={item.title} />
              <p>${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => onDeleteProduct(item.id)}>
                Quitar producto
              </button>
            </div>
          ))
        ) : (
          <p>Carrito vacío!</p>
        )}
      </div>

      <form onSubmit={onComprar}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label>Teléfono</label>
          <input
            type="text"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>

        <button type="submit">Comprar</button>
      </form>
    </div>
  );
}

export default CartView;
