import React from 'react';
import './CheckoutButton.css';

const CheckoutButton = ({ onAdd, disabled, buttonText }) => {
  return (
    <button onClick={onAdd} disabled={disabled} className="checkout-button">
      {buttonText}
    </button>
  );
};

export default CheckoutButton;
