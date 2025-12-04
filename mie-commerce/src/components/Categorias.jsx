import { useState } from "react";

function Categorias({ productos }) {
  const [categoriaBuscada, setCategoriaBuscada] = useState("");

  const productosFiltrados = productos.filter((item) =>
    item.category.toLowerCase().includes(categoriaBuscada.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar categoría..."
        value={categoriaBuscada}
        onChange={(e) => setCategoriaBuscada(e.target.value)}
      />

      <ul>
        {productosFiltrados.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <p>${item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;
