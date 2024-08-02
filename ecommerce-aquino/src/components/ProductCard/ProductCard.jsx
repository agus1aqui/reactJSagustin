import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export const ProductCard = ({ name, price, id, img, category }) => {
  return (
    <div className="product-card">
      <h1>{name}</h1>
      <h1>{`USD ${price}`}</h1>
      <img src={img} alt={name} />
      <p>{category}</p>
      <Link to={`/itemDetail/${id}`}>See more</Link>
    </div>
  );
}

export default ProductCard;
