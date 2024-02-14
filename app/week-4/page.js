import NewItem from './new-item';

const Page = () => {

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-around">
      <h1 className='t-color-red'>Add a New Item</h1>
      <NewItem />
    </div>
  );
};

export default Page;
