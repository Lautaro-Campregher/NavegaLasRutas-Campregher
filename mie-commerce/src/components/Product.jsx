import { useContext } from "react";
import { cartContext } from "./CartProvider";

function Product({ product }) {
  const { addToCart } = useContext(cartContext);

  function handleAddCart() {
    addToCart(product);
  }

  return (
    <div className="producto">
      <section className="card_producto">
        <h2>{product.title}</h2>
        <article>
          <img src={product.image} alt={product.title} />
        </article>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={handleAddCart}>Agregar al carrito</button>
      </section>
    </div>
  );
}

export default Product;
