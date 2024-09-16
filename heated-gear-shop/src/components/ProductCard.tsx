import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image, price }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </Link>
      <p>${price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;