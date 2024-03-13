"use client";
import React, { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js'; // Import the MealIdeas component

import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    // Define the function to handle adding a new item
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    // Define the function to handle selecting an item from the list
    const handleItemSelect = (itemName) => {
        // Clean up the item name
        const cleanedItemName = itemName.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
        // Set the selected item name
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main style={{ display: 'flex' }}>
            <div>
                <h1 className="text-4xl font-semibold mb-4">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                {/* Pass the handleItemSelect function to the ItemList component */}
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            {/* Render the MealIdeas component with the selectedItemName as ingredient */}
            <div>
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}
