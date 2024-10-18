import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  variants: string[];
}

interface ProductShowcaseProps {
  product: Product;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, quantity: 1, variant: selectedVariant }
    });
  };

  return (
    <section className="product-showcase">
      <div className="product-images">
        <img src={product.images[currentImageIndex]} alt={product.name} />
        <div className="image-thumbnails">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              onClick={() => setCurrentImageIndex(index)}
              className={currentImageIndex === index ? 'active' : ''}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
        <div className="variant-selection">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={selectedVariant === variant ? 'active' : ''}
            >
              {variant}
            </button>
          ))}
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </section>
  );
};

export default ProductShowcase;
