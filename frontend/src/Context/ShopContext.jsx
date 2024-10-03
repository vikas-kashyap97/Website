// src/Context/ShopContext.jsx

import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import girls_product from "../Components/Girls Fashion/girls"; // Import girls_product
import boys_product from "../Components/Boys Fashion/boys"; // Import boys_product
import boys_footwear from "../Components/Boys Footwear/boysf";
import girls_footwear from "../Components/Girls Footwear/girlsf";
import toys_product from "../Components/Toys/Toys";
import essential_product from "../Components/Essential/Essential";


export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let Cart = {};
    for(let index = 0; index < all_product.length+1; index++) {
        Cart[index] = 0;
    }
    return Cart;
}
const ShopContextProvider = (props) => {

    const[cartItems,setCartItems] = useState(getDefaultCart());
    
    
    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount +=itemInfo.new_price * cartItems[item];
            }
        }
            return totalAmount;  
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }    
        return totalItem;

    }

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,       // Existing products
        girls_product,     // Include girls products
        boys_product,      // Include boys products
        boys_footwear,      // Include kids products
        girls_footwear, 
        toys_product,
        essential_product,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
