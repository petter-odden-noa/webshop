import React, { useState } from 'react';
import { useCart } from '../context/CartContext'

const Checkout: React.FC = () => {
  const { state } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement order submission
    console.log('Order submitted:', { items: state.items, customerInfo: formData });
    // TODO: Clear the cart and redirect to a confirmation page
  };

  const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        {state.items.map((item) => (
          <div key={item.id} className="checkout-item">
            <span>{item.name}</span>
            <span>{item.quantity} x ${item.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="total">
          <strong>Total: ${totalPrice.toFixed(2)}</strong>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Shipping Information</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleInputChange}
          placeholder="Zip Code"
          required
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          placeholder="Country"
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;