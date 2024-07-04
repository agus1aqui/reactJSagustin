import React from 'react'
import { Link } from 'react-router-dom'


export const ProductCard = ({ name, price, id }) => {
  return (
    <div style={{ border: "2px solid white" }}>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <Link to={`"/itemDetail/${id}"`}>Especificaciones</Link>
    </div>
  )
}

export default ProductCard