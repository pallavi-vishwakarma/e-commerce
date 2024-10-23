import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.title} style={{ maxHeight: '200px', objectFit: 'contain' }} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price.toFixed(2)}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
