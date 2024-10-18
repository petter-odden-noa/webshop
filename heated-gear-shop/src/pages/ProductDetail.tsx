import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product, ProductService } from '../services/ProductService';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const fetchedProduct = await ProductService.getProductById(parseInt(id));
        setProduct(fetchedProduct);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch({ 
        type: 'ADD_ITEM', 
        payload: { ...product, quantity: 1, variant: 'default' }
      });
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
