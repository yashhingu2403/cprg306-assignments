import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="mb-4 p-4 border bg-cyan-900  max-w-md">
      <p className= "font-sans">
      <p className="text-lg font-semibold divide-y divide-slate-300">{name}</p>
      <p className="text-slate-300">Quantity: {quantity}</p>
      <p className="text-slate-300">Category: {category}</p>
      </p>    
    </li>
  );
};
export default Item;