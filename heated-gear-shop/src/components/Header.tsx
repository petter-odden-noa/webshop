import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { state } = useCart();
  const cartItemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/heated-gear-logo.png" alt="Heated Gear Logo" />
        </Link>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </nav>
        <div className="utility-icons">
          <Link to="/cart" className="cart-icon">
            Cart ({cartItemCount})
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

