import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="mb-2">
      <span className="font-bold">{name}</span>
      <span className="ml-2 text-gray-600">{quantity} {quantity === 1 ? 'item' : 'items'}</span>
      <span className="ml-2 text-gray-600">({category})</span>
    </li>
  );
};
export default Item;
