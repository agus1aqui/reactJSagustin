import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

const Cart = () => {
  const { cart, clearCart, removeProduct, cartTotal } = useContext(CartContext);
  let total = cartTotal();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to remove this product from the cart?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Remove",
      denyButtonText: `Don't Remove`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Product removed", "", "info");
        removeProduct(id);
      } else if (result.isDenied) {
      }
    });
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <img src={product.img} alt={product.name} />
          <div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="remove-from-cart-button" onClick={() => handleDelete(product.id)}>Remove from Cart</button>
          </div>
        </div>
      ))}
      <p className='total'>total:{total}</p>
      <Link to="/checkout">
        <button className="checkout-button">Checkout</button>
      </Link>
      <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
