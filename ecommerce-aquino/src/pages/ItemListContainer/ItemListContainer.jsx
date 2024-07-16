
import React from 'react';
import { productos } from "../../productos";
import { ItemList } from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const { name } = useParams();
  useEffect(() => {

    const getProductos = new Promise((resolve, reject) => {
      let x = true;
      let arrayFiltered = productos.filter((producto) => producto.category === name);
      if (x) {
        resolve(name ? arrayFiltered : productos);
      }
    });

    getProductos
      .then((res) => {
        setItems(res);
      })


  }, [name]);



  return (
    <ItemList items={items} />
  );
};

export default ItemListContainer;
