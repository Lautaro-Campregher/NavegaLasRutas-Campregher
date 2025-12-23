import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export async function getList() {
  const productsRef = collection(db, "Productos");
  const snapshot = await getDocs(productsRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getProduct(id) {
  const productRef = doc(db, "Productos", id);
  const snapshot = await getDoc(productRef);
  if (!snapshot.exists()) {
    throw new Error("Producto no encontrado.");
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}
