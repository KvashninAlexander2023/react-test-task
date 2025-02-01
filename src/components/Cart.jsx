import React, { useState } from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Корзина</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Цвет: {item.color}</p>
            <p>Размер: {item.size}</p>
            <p>Цена: {item.price}</p>
            <button onClick={() => removeFromCart(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;