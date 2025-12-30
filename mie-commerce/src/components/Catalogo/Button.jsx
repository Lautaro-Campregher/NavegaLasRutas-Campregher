import { Link } from "react-router-dom";

function Button({ id }) {
  return (
    <>
      <button className="btn">
        <Link to={`./product/${id}`}>Ver más</Link>
      </button>
    </>
  );
}

export default Button;
