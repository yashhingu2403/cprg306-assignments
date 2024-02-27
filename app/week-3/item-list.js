import Item from "./item.js"

const ItemList = () => {

    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      };
       
      const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
      };
       
      const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
      };
       
      const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
      };
       
      const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
      };
       
      const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
      };
       
      const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
      };
       
      const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
      };
       
      const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
      };
       
      const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
      };
       
      const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
      };
       
      const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
    };

    return (
        <ul>
            <div className="grid grid-cols-2 gap-4 place-content-stretch h-48">  
            <div><Item {...item1}></Item></div>
            <div><Item  {...item2}></Item></div>
            <div><Item {...item3}></Item></div>
            <div><Item {...item4}></Item></div>
            <div><Item {...item5}></Item></div>
            <div><Item {...item6}></Item></div>
            <div><Item {...item7}></Item></div>
            <div><Item {...item8}></Item></div>
            <div><Item {...item9}></Item></div>
            <div><Item {...item10}></Item></div>
            <div><Item {...item11}></Item></div>
            <div><Item {...item12}></Item></div>
            </div>
        </ul>
    );
};
export default ItemList;