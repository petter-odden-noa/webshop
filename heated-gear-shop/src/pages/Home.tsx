import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Shop</h1>
      <p>Discover our amazing collection of heated jackets and power banks!</p>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <ul>
          <li>Heated Jackets - Stay warm in style</li>
          <li>Power Banks - Keep your devices charged on the go</li>
        </ul>
      </div>
      <p>
        We offer high-quality products designed to make your outdoor adventures more comfortable.
        Our heated jackets provide warmth in cold weather, while our power banks ensure your
        devices stay charged wherever you go.
      </p>
      <Link to="/products" className="cta-button">
        Shop Now
      </Link>
    </div>
  );
};

export default Home;