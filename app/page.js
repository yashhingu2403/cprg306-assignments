import Link from 'next/link';
export default function Page() {
  return (
    <main main style={{ backgroundColor: '#FFA500' }}>
        <ul classname= "bg-orange-500 p-5 mb-5">
          <h1>CPRG-306: web Development 2- Assignments</h1>
          <div style={{ backgroundColor: 'green', padding: '10px', margin: '5px' }}>
          <p><Link href="week-2" >Week 2 Assignments</Link></p>
          </div>
          <div style={{ backgroundColor: 'green', padding: '10px', margin: '5px' }}>
          <p><Link href="week-3" className="text-blue-500 hover:text-green-500 transition duration-500 block text-lg">Week 3 Assignment</Link></p>
          </div>
        </ul>
      </main>
      
  );
};
