import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    } else {
      removeItem(id);
    }
  };

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {state.items.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>
                Quantity:
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: ${total.toFixed(2)}</h2>
          </div>
          <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
};

export default Cart;