import React, { useState, useEffect } from 'react';
import CheckoutButton from './CheckoutButton';

const CheckoutButtonContainer = ({ onAdd, stock }) => {
  const [remainingStock, setRemainingStock] = useState(stock);

  useEffect(() => {
    setRemainingStock(stock);
  }, [stock]);

  const handleClick = () => {
    if (remainingStock > 0) {
      onAdd();
      setRemainingStock(prevStock => prevStock - 1);
    } else {
      alert("Out of stock");
    }
  };

  return (
    <CheckoutButton 
      onAdd={handleClick} 
      disabled={remainingStock <= 0} 
      buttonText={remainingStock > 0 ? "Checkout" : "Out of Stock"} 
    />
  );
};

export default CheckoutButtonContainer;
