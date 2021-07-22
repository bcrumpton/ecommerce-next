import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import CarouselImage from './CarouselImage';

function Banner() {
  const bannerItems = [
    {
      brand: 'Hoka One One',
      product: 'Clifton 8',
      img: '/hoka-clifton.png',
      imgAlt: 'Hoka One One - Clifton 8',
    },
    {
      brand: 'Hoka One One',
      product: 'Arahi 5',
      img: '/hoka-arahi.png',
      imgAlt: 'Hoka One One - Arahi 5',
    },
    {
      brand: 'Hoka One One',
      product: 'Rincon 3',
      img: '/hoka-rincon.png',
      imgAlt: 'Hoka One One - Rincon 3',
    },
  ];
  return (
    <div className="relative">
      <div className="banner relative top-0 right-0 left-0 bottom-0 w-full z-20" />
      <Carousel
        style={{ height: '475px' }}
        className="absolute w-full top-0 bottom-0 right-0 left-0 z-20"
        // autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {bannerItems.map(({ brand, product, img, imgAlt }, idx) => {
          return (
            <CarouselImage
              key={idx}
              brand={brand}
              product={product}
              img={img}
              imgAlt={imgAlt}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default Banner;
