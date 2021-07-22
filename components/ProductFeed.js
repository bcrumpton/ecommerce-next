import Product from './Product';
import Image from 'next/image';

function ProductFeed({ products }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 m-5 relative z-30">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => {
          return (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          );
        })}

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => {
            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            );
          })}
      </div>

      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }) => {
          return (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          );
        })}
    </div>
  );
}

export default ProductFeed;
