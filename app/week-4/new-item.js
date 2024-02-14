"use client";

import { useState } from "react";

function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <main>
    <form onSubmit={handleSubmit}>
      <label className=" block mb-3 ">
      <input
        type="text"
        placeholder="Enter item name here..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border border-gray-400 p-2 rounded text-black w-full"
      />
      </label>
      <label className="mb-3">
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
        max="99"
        className="border border-gray-400 p-2 rounded text-black w-1/3"
        required
      />
      </label>
      <label className="mb-2 ">
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-400 p-2 rounded text-black ">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </label>

      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        +
      </button>
    </form>
    </main>
  );
}

export default NewItem;
