import React, { useEffect, useState } from 'react';
import { Product, ProductService } from '../services/ProductService';
import ProductCard from '../components/ProductCard';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await ProductService.getProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

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