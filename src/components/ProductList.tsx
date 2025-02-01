import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Список товаров</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h2>{product.name}</h2>
              <img src={product.colors[0].images[0]} alt={product.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;