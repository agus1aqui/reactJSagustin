import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ name: "", email: "", phone: "", address: "" });
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = cartTotal();

  const sendForm = (e) => {
    e.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    let productCollection = collection(db, "products");
    cart.forEach((e) => {
      let refDoc = doc(productCollection, e.id);
      updateDoc(refDoc, { stock: e.stock - e.quantity });
    });

    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        toast.success(`your order has been placed, your order id is ${res.id} `);
      })
      .catch()
      .finally(() => {
        clearCart();
        navigate("/");
      });
  };

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {orderId ? (
        <p>Your order id is: {orderId}</p>
      ) : (
        <form onSubmit={sendForm}>
          <input type='text' placeholder='Enter your name' onChange={handleChanges} name='name' />
          <input type='email' placeholder='Enter your email' onChange={handleChanges} name='email' />
          <input type='number' placeholder='Enter your phone' onChange={handleChanges} name='phone' />
          <input type='text' placeholder='Enter your address' onChange={handleChanges} name='address' />
          <button type='submit'>Submit</button>
          <button type='reset'>Reset</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;