import React from 'react';
import './ItemDetail.css';
import VehicleConfigurationContainer from '../../components/VehicleConfiguration/VehicleConfigurationContainer';
import CheckoutButtonContainer from '../../components/CheckoutButton/CheckoutButtonContainer';


export const ItemDetail = ({ item, onAdd }) => {
  return (
    <div className="item-detail">
      <img src={item.img} alt={item.name} />
      <h2>{item.name}</h2>
      <VehicleConfigurationContainer />
      <p>USD {item.price}</p>
      <CheckoutButtonContainer onAdd={onAdd} stock={item.stock} />
    </div>
  );
};

export default ItemDetail;
