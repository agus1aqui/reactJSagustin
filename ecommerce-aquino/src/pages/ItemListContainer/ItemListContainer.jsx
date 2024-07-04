
import React from 'react';
import { productos } from "../../productos";
import { ItemList } from './ItemList';
import { useState, useEffect } from 'react';

export const ItemListContainer = () => {

  const [items, setItems] = useState({});
  useEffect(() => {

    const getProductos = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(productos);
      }
    });

    getProductos
      .then((res) => {
        setItems(res);
      })


  }, []);



  return (
    <ItemList items={items} />
  );
};

export default ItemListContainer;
