import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
// import { products } from "../../data/products";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { toast } from "sonner";


export const ItemDetailContainer = () => {

  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {

    let collectionRef = collection(db, "products");
    let docRef = doc(collectionRef, id);
    let getDocPromise = getDoc(docRef);
    getDocPromise.then((res) => setItem({ ...res.data(), id: res.id }));

    // let product = products.find((product) => product.id === +id);
    // if (product) {
    //   setItem(product);
    // }
  }, [id]);

  //

  const onAdd = (quantity) => {
    let finalobjet = { ...item, quantity: quantity };
    addToCart(finalobjet);
    toast.success(`Check your cart`);

  }

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
