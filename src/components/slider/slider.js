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

import Slide1 from '../../images/image-product-1.jpg';
import Slide2 from '../../images/image-product-2.jpg';
import Slide3 from '../../images/image-product-3.jpg';
import Slide4 from '../../images/image-product-4.jpg';

import './styles.scss';
import { useState } from 'react';

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Controller, Thumbs]);

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='slider'>
      <Swiper
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : 'auto'}
        loop={true}
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
        <SwiperSlide>
          <img src={Slide1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} alt='' />
        </SwiperSlide>
      </Swiper>

      <Swiper
        id='thumbs'
        spaceBetween={25}
        slidesPerView={4}
        onSwiper={setThumbsSwiper}
      >
        <SwiperSlide>
          <img src={Slide1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
