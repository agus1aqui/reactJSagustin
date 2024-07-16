import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "../../productos";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let producto = productos.find((producto) => producto.id === +id);
    if (producto) {
      setItem(producto);
    }
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
