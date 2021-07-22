import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

function Product({ id, title, price, description, image, category }) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    // Sending the product as an action to the redux store... the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <div key={id} className="bg-white rounded-xl shadow-md p-10 flex flex-col">
      <Image
        className="mx-auto"
        src={image}
        alt={title}
        height={200}
        width={200}
        objectFit="contain"
      />
      <h2 className="flex-1 mt-4 text-lg font-bold">{title}</h2>
      <p className="mt-4 line-clamp-2">{description}</p>
      <p className="mt-4 font-bold">
        <Currency quantity={price} currency="USD" />
      </p>
      <button onClick={addItemToBasket} className="button mt-2">
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
