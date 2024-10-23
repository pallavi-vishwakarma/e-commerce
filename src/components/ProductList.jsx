import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const fetchProducts = async (pageNum) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://fakestoreapi.com/products?limit=6&page=${pageNum}`);
      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...response.data]);
      }
    } catch (error) {
      console.error('Error fetching products', error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (hasMore) setPage(page + 1); // Load next page if more products are available
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <ProductItem product={product} addToCart={addToCart} />
        </div>
      ))}

      {loading && <div className="text-center">Loading...</div>}
      {!hasMore && <div className="text-center">No more products to load.</div>}
    </div>
  );
};

export default ProductList;
