import ItemList from "./item-list.js";

export default function Page() {
    return (
      <main>
        <div className= " bg-blue-400   h-screen w-full flex justify-center items-start">
        <div className="py-8"></div>
        <p className="text-5xl">
        <div>
        <h1>Shopping List</h1>
        </div></p></div>
        <ItemList />
      </main>
    );
};