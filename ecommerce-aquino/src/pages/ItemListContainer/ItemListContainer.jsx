import React from 'react';
import { ItemList } from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MoonLoader from "react-spinners/MoonLoader";
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore'

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const { name } = useParams();
  useEffect(() => {

    let productsCollection = collection(db, 'products');

    let productsQuery = productsCollection;
    if (name) {
      productsCollection = query(productsQuery, where('category', '==', name))
    }


    let getProducts = getDocs(productsCollection);

    getProducts.then((res) => {
      let arrayMaped = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayMaped);
    });



    // const getProducts = new Promise((resolve, reject) => {
    //   let x = true;
    //   let arrayFiltered = products.filter((product) => product.category === name);
    //   if (x) {
    //     setTimeout(() => {
    //       resolve(name ? arrayFiltered : products);
    //     }, 1000)
    //   }
    // });

    // getProducts
    //   .then((res) => {
    //     setItems(res);
    //   })
  }, [name]);



   if (items.length === 0) {
     return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       <MoonLoader color="#ffffff" />
     </div>
   }

  //aniadir productos
  // const addProducts = () => {
  //   let productsCollection = collection(db, 'products');
  //   products.forEach((element) => {
  //     addDoc(productsCollection, element);
  //   });
  // }


  return (
    <>
      {/* <button onClick={addProducts}>add product</button> */}
      <ItemList items={items} />
    </>
  )
};

export default ItemListContainer;




