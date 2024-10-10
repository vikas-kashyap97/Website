import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { useParams } from 'react-router-dom';
import new_collections from '../Components/Assets/new_collections';
import data_product from '../Components/Assets/data';

const Product = () => {
  const { productId } = useParams();
  const { girls_product, boys_product, boys_footwear, girls_footwear, toys_product, essential_product } = useContext(ShopContext);
  let product = null;

  if (new_collections.find((e) => e.id === Number(productId))) {
    product = new_collections.find((e) => e.id === Number(productId));
  } else if (data_product.find((e) => e.id === Number(productId))) {
    product = data_product.find((e) => e.id === Number(productId));
  } else {
    product = girls_product?.find((e) => e.id === Number(productId)) ||
              boys_product?.find((e) => e.id === Number(productId)) ||
              boys_footwear?.find((e) => e.id === Number(productId)) ||
              girls_footwear?.find((e) => e.id === Number(productId)) ||
              toys_product?.find((e) => e.id === Number(productId)) ||
              essential_product?.find((e) => e.id === Number(productId));
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;