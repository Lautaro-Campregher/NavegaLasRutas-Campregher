import { useEffect, useState } from "react";
import { getList } from "./fetch";
import Categorias from "./Categorias";

function CategoriasContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getList().then((item) => setProducts(item));
  }, []);

  return <Categorias productos={products} />;
}

export default CategoriasContainer;
