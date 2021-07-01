import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({ id, price, title, description, category, image }) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    dispatch(addToBasket(product));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <p className="text-xs line-clamp-3">{description}</p>
        <Currency quantity={price} currency="USD" />
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button mt-auto">
          Add To Basket
        </button>
        <button onClick={removeItemFromBasket} className="button mt-auto">
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
