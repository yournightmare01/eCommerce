import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

import Slide1 from '../images/image-product-1.jpg';
import Slide2 from '../images/image-product-2.jpg';
import Slide3 from '../images/image-product-3.jpg';
import Slide4 from '../images/image-product-4.jpg';
import classes from './items.module.scss';

const Items = () => {
  return (
    <div className={classes.left}>
      <div className={classes.slider}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
        >
          <SwiperSlide className='imgContainer'>
            <img src={Slide1} alt='' />
          </SwiperSlide>
          <SwiperSlide className='imgContainer'>
            <img src={Slide2} alt='' />
          </SwiperSlide>
          <SwiperSlide className='imgContainer'>
            <img src={Slide3} alt='' />
          </SwiperSlide>
          <SwiperSlide className='imgContainer'>
            <img src={Slide4} alt='' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Items;
