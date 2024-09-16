import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Sample product data (we'll use this for now)
const products = [
  {
    id: 1,
    name: 'Heated Jacket - Black',
    image: '/images/heated-jacket-black.jpg',
    price: 199.99,
    description: 'Stay warm in style with our advanced heated jacket. Features adjustable temperature settings and long-lasting battery life.',
    colors: ['Black', 'Blue'],
  },
  {
    id: 2,
    name: 'Heated Jacket - Blue',
    image: '/images/heated-jacket-blue.jpg',
    price: 199.99,
    description: 'Stay warm in style with our advanced heated jacket. Features adjustable temperature settings and long-lasting battery life.',
    colors: ['Black', 'Blue'],
  },
  {
    id: 3,
    name: 'Power Bank',
    image: '/images/power-bank.jpg',
    price: 49.99,
    description: 'High-capacity power bank to keep your devices charged on the go. Compatible with various USB devices.',
    colors: [],
  },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const { dispatch } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      },
    });
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
      {product.colors.length > 0 && (
        <div className="color-options">
          <h3>Color Options:</h3>
          <ul>
            {product.colors.map(color => (
              <li key={color}>{color}</li>
            ))}
          </ul>
        </div>
      )}
      <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;