import Head from 'next/head';
import Header from '../components/Header';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useRouter } from 'next/router';

function Success() {
  const router = useRouter();
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
      <main className="max-w-screen-lg py-10 mx-auto">
        <div className="p-5 flex flex-col">
          <div className="flex items-center pb-5">
            <AiFillCheckCircle size={60} color="green" />
            <h1 className="ml-6 text-3xl font-bold">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We&apos;ll send a confirmation once
            your item has been shipped. If you would like to check the status of
            your order(s) please follow the link below.
          </p>
          <button
            onClick={() => router.push('/orders')}
            className="button mt-8"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
