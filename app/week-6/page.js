"use client";
import React, { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js'; 


import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);

    
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };
    return (
        <main>
            <h1 className="text-4xl font-semibold mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} /> 
        </main>
    );
}
