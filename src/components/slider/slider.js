import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  Controller,
  Thumbs,
} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import './styles.scss';

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Controller, Thumbs]);

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [images, setImages] = useState([]);
  const params = useParams();

  const fetchImages = async () => {
    const data = await fetch(
      `https://openapi.etsy.com/v3/application/listings/batch?listing_ids=${params.itemId}&includes=Images&`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'l3l05s3fsldandekrnr6lmxj',
        },
      }
    );
    const response = await data.json();

    setImages(response.results[0].images);
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div className='slider'>
      <Swiper
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        effect={'coverflow'}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {images.map((largeImg) => {
          return (
            <SwiperSlide key={Math.random()}>
              <img src={largeImg.url_570xN} alt='' />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        id='thumbs'
        spaceBetween={25}
        slidesPerView={4}
        onSwiper={setThumbsSwiper}
      >
        {images.map((smallImg) => {
          return (
            <SwiperSlide key={Math.random()}>
              <img src={smallImg.url_170x135} alt='' />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
