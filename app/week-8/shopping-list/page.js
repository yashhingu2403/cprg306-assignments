"use client";
import React, { useState } from 'react';
import { useUserAuth } from "./_utils/auth-context";
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js'; // Import the MealIdeas component

import itemsData from './items.json';

export default function Page() {
    const user = useUserAuth(); // Using the useUserAuth hook to get user authentication status
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

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

    // Check if the user is logged in, if not, do not render the shopping list page
    if (!user) {
        return null; // Render nothing if the user is not logged in
    }

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
