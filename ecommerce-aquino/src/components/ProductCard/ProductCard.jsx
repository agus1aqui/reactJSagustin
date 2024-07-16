import React from 'react'
import { Link } from 'react-router-dom'


export const ProductCard = ({ name, price, id, img, category }) => {
  return (
    <div style={{ border: "2px solid white" }}>
      <h1>{name}</h1>
      <h1>{`USD ${price}`}</h1>
      <img src={img} alt={name} />
      <p>{category}</p>
      <Link to={`/itemDetail/${id}`}>Especificaciones</Link>
    </div>
  )
}

export default ProductCard