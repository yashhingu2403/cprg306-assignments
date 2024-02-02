import React from 'react';
import Item from './item';

const ItemList = () => {
  const items = [
    {
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },
    {
      name: "bread, 2 loaves 🍞",
      quantity: 2,
      category: "bakery",
    },
    {
      name: "eggs, 12 🥚",
      quantity: 1,
      category: "dairy",
    },
    {
      name: "bananas, 12 🍌",
      quantity: 6,
      category: "produce",
    },
    {
        name: "broccoli, 🥦",
        quantity: 3,
        category: "produce",
    },
    {
      name: "chicken breasts, 1 kg 🍗",
      quantity: 1,
      category: "meat",
    },
    {
      name: "pasta sauce, 1 kg 🍝",
      quantity: 3,
      category: "pantry",
    },
    {
      name: "spaghetti, 454 g 🍝",
      quantity: 2,
      category: "household",
    },
    {
      name: "toilet paper, 12 rolls 🧻",
      quantity: 1,
      category: "household",
    },
    {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
    },
    {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
    },
    {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
    },
 ];

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
      </ul>
  );
};
export default ItemList;