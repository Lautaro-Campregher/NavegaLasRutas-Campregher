import { useEffect, useState } from "react";
import Categorias from "../components/Categorias";
import { getList } from "../services/productsService";

function CategoriasContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getList()
      .then((item) => {
        setProducts(item);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <Categorias productos={products} />;
}

export default CategoriasContainer;
