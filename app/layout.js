import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Your shopping list description" />
        <meta name="author" content="Your Name" />
        <title>Shopping List</title> {/* Updated title here */}
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
