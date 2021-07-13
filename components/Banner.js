import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="w-full" style={{ height: '515px' }}>
          <Image
            layout="fill"
            objectFit="contain"
            loading="lazy"
            src="/luxury.jpg"
            alt="Luxury gifts"
          />
        </div>
        <div className="w-full" style={{ height: '515px' }}>
          <Image
            layout="fill"
            objectFit="contain"
            loading="lazy"
            src="/audible.jpg"
            alt="Audible advertisement"
          />
        </div>
        <div className="w-full" style={{ height: '515px' }}>
          <Image
            layout="fill"
            objectFit="contain"
            loading="lazy"
            src="/primevideo.jpg"
            alt="Amazon Prime Video"
          />
        </div>
        <div className="w-full" style={{ height: '515px' }}>
          <Image
            layout="fill"
            objectFit="contain"
            loading="lazy"
            src="/amazonmusic.jpg"
            alt="Amazon Prime Music"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
