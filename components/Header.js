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
    <header>
      <div className="primary flex justify-between items-center p-2 bg-yellow-200">
        <div className="flex w-32">
          <h1 className="cursor-pointer" onClick={() => router.push('/')}>
            Amazon Logo
          </h1>
        </div>
        <div className="flex items-center w-9/12">
          <input
            className="focus:border rounded-md ml-2 px-4 h-10 w-full"
            type="search"
            name=""
            id=""
          />
          <button className="cursor-pointer" onClick={search}>
            <FaSearch className="ml-2" size={20} />
          </button>
        </div>
        <div className="flex items-center ml-2">
          <a onClick={!session ? signIn : signOut} className="mr-2" href="#">
            <small>
              {session ? `Hello ${session.user.name} Sign Out` : `Sign In`}
            </small>
          </a>
          <a onClick={() => router.push('/orders')} className="mr-2" href="#">
            Orders
          </a>
          <span className="text-lg mr-1">{items.length}</span>
          <AiOutlineShoppingCart
            className="cursor-pointer"
            onClick={() => router.push('/checkout')}
            size={20}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
