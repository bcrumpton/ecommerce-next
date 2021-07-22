import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header() {
  const search = () => {
    console.log('clicked search');
  };

  const [session] = useSession();
  const router = useRouter();

  const items = useSelector(selectItems);

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto primary flex justify-between items-center p-4 text-deep-purple">
        <div className="flex w-32">
          <h1
            className="cursor-pointer tracking-wide text-3xl font-extrabold"
            onClick={() => router.push('/')}
          >
            Curated
          </h1>
        </div>
        <div className="flex space-x-6 items-end ml-2">
          <small className="font-normal">
            {session ? `Hello ${session.user.name}` : ''}
          </small>
          <a
            onClick={!session ? signIn : signOut}
            className="font-bold text-xl"
            href="#"
          >
            {session ? `Sign Out` : `Sign In`}
          </a>
          <a
            onClick={() => router.push('/orders')}
            className="font-bold text-xl"
            href="#"
          >
            Orders
          </a>
          <a
            className="flex items-center cursor-pointer"
            href="#"
            onClick={() => router.push('/checkout')}
          >
            <span className="font-bold text-xl mr-1">{items.length}</span>
            <AiOutlineShoppingCart size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
