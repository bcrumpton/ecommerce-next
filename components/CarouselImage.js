import Image from 'next/image';

const CarouselImage = ({ brand, product, img, imgAlt }) => {
  return (
    <div>
      <div>
        <div className="absolute top-4 sm:right-8 md:right-20 lg:right-32 w-full">
          <h1 className="text-right text-9xl font-black">{brand}</h1>
          <h2 className="text-right text-6xl font-black">{product}</h2>
        </div>
        <Image
          src={img}
          alt={imgAlt}
          width={500}
          height={500}
          objectFit="contain"
          priority={true}
        />
      </div>
    </div>
  );
};

export default CarouselImage;
