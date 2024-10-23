import React, { useState } from 'react';

const Checkout = ({ cart, clearCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({ name: '', address: '', payment: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();  // Clear cart after successful checkout
  };

  if (orderPlaced) {
    return (
      <div className="alert alert-success mt-4">
        <h4>Order Confirmed!</h4>
        <p>Thank you, {form.name}. Your order will be delivered to {form.address}.</p>
      </div>
    );
  }
 

  return (
    <div className="checkout mt-4">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>No items in cart to checkout.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="payment">Payment Details</label>
            <input
              type="text"
              id="payment"
              name="payment"
              value={form.payment}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-success mt-3">
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
