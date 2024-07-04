import React from 'react'
import { ProductCard } from '../../components/ProductCard/ProductCard';


export const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((elemento) => {
                return <ProductCard key={elemento.id} name={elemento.name} price={elemento.price} id={elemento.id} />
            })};
        </div>
    );
};
//min 39

export default ItemList;