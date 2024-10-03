// src/Pages/ShopCategory.jsx

import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';


const ShopCategory = (props) => {
  const { girls_product, boys_product, boys_footware, girls_footware, toys_product, essential_product   } = useContext(ShopContext);
  
  // Determine which product list to use based on the category
  let productsToDisplay;

  if (props.category === "Girls Fashion") {
    productsToDisplay = girls_product;
  } else if (props.category === "Boys Fashion") {
    productsToDisplay = boys_product;
  } else if (props.category === "Boys Footwear") {
    productsToDisplay = boys_footware;
  } else if (props.category === "Girls Footwear") {
    productsToDisplay = girls_footware;
  } else if (props.category === "Toys") {
    productsToDisplay = toys_product;
  } else if (props.category === "Essential") {
    productsToDisplay = essential_product;
  } else {
    productsToDisplay = []; // Fallback or handle default case if needed
  }

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{productsToDisplay.length}</span> out of {productsToDisplay.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {productsToDisplay.map((item) => (
          <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
