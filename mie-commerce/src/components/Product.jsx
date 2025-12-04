function Product(props) {
  return (
    <section className="card">
      <h2>{props.product.title}</h2>
      <article>
        <img src={props.product.image} alt={props.product.title} />
      </article>
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
    </section>
  );
}

export default Product;
