import React from 'react';
import ProductCard from '../components/ProductCard';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Heated Jacket - Black',
    image: '/images/heated-jacket-black.jpg',
    price: 199.99,
  },
  {
    id: 2,
    name: 'Heated Jacket - Blue',
    image: '/images/heated-jacket-blue.jpg',
    price: 199.99,
  },
  {
    id: 3,
    name: 'Power Bank',
    image: '/images/power-bank.jpg',
    price: 49.99,
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;