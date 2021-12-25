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
import { getProductData } from '../../features/getProductsData/produtDataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './styles.scss';

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Controller, Thumbs]);

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useAppDispatch();
  const { productData } = useAppSelector((state) => state.productData);
  const params = useParams();

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  const product = productData.filter(
    (item) => item.listing_id === +params.itemId
  );

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
        {product[0].images.map((arg) => {
          return (
            <SwiperSlide>
              <img src={arg.url_570xN} alt='' />
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
        {product[0].images.map((arg) => {
          return (
            <SwiperSlide>
              <img src={arg.url_170x135} alt='' />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
