import React from 'react';
import ItemList from './item-list.js';

export default function Page() {
  return (
    <main>
          <div>
            <h1 className="text-3xl font-bold color-red"> Shopping List</h1>
          </div>
      <ItemList />
    </main>
  );
};
