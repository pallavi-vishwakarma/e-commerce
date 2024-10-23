import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.quantity} x ${item.price.toFixed(2)}</p>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary mt-3">
            <h4>Total Items: {getTotalItems()}</h4>
            <h4>Total Price: ${getTotalPrice()}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
