import React,{useState} from 'react';
import Item from './item.js';

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState('name');
    const [groupByCategory, setGroupByCategory] = useState(false);

    const handleSortByName = () => {
        setSortBy('name');
    };

    const handleSortByCategory = () => {
        setSortBy('category');
    };

    const handleGroupByCategory = () => {
        setGroupByCategory(!groupByCategory);
    };

    const sortedItems = groupByCategory
        ? items
              .slice()
              .sort((a, b) => a.category.localeCompare(b.category))
              .reduce((acc, item) => {
                  const existingCategory = acc.find((category) => category.category === item.category);

                  if (existingCategory) {
                      existingCategory.items.push(item);
                  } else {
                      acc.push({ category: item.category, items: [item] });
                  }

                  return acc;
              }, [])
        : items.slice().sort((a, b) => {
              if (sortBy === 'name') {
                  return a.name.localeCompare(b.name);
              } else if (sortBy === 'category') {
                  return a.category.localeCompare(b.category);
              }
          });

    return (
        <main className="p-4">
            <label htmlFor="Sort">Sort by:</label>
            <div className="mb-4">
                <button className={'bg-orange-500 p-1 m-2 w-28 '} onClick={handleSortByName}>
                    Name
                </button>
                <button className={'bg-orange-700 p-1 m-2 w-28 '} onClick={handleSortByCategory}>
                    Category
                </button>
                <button className={'bg-orange-700 p-1 m-2 w-28 '} onClick={handleGroupByCategory}>
                    Group by Category
                </button>
            </div>
            {sortedItems.map((item, index) => {
                return groupByCategory ? (
                    <div key={index}>
                        <h2 className="text-2xl font-semibold mb-4">{item.category}</h2>
                        {item.items.map((item, index) => (
                            <Item key={index} {...item} onSelect={() => onItemSelect(item.name)} />
                        ))}
                    </div>
                ) : (
                    <Item key={index} {...item} onSelect={() => onItemSelect(item.name)} />
                );
            })}
        </main>
    );
}
