import Head from 'next/head';
import Header from '../components/Header';

function Success() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Success</title>
        <meta
          name="description"
          content="Success page after paying for items"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Success</h1>
    </div>
  );
}

export default Success;
