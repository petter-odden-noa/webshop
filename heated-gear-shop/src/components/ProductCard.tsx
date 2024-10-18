import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image, price }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, name, price, quantity: 1, variant: 'default' }
    });
  };

  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </Link>
      <p>${price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
