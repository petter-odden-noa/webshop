import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    } else {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    }
  };

  const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {state.items.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>
                Quantity: 
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;