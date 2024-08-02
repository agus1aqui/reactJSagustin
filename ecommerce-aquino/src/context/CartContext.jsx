import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    //status
    const [cart, setCart] = useState([]);

    //add
    const addToCart = (product) => {
        isInCart(product.id) || setCart([...cart, product]);
        setCart([...cart, product]);
    };
    //in in
    const isInCart = (id) => {
        let isIn = cart.some((product) => product.id === id);
        return isIn
    };

    //remove
    const clearCart = () => {
        setCart([]);
    };
    //remove product in cart
    const removeProduct = (id) => {
        console.log(id);
        let updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);
    };

    //amount
    const cartItemCount = () => {
        return cart.length;
    };

    // total
    const cartTotal = () => { 
        return cart.reduce((total, product) => total + product.price, 0);
    };



    const value = {
        cart,
        addToCart,
        clearCart,
        removeProduct,
        cartItemCount,
        cartTotal

    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
