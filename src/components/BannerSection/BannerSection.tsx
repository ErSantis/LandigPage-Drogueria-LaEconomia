// components/BannerSection/BannerSection.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { NavigationButton } from './NavigationButton';
import { BannerSlide } from './BannerSlide';
import { banners } from '../../data/banner.data';

import 'swiper/swiper-bundle.css';

const BannerSection = () => {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <section className="relative w-full h-[140px] md:h-[422px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={2}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          320: {
            slidesPerView: 1.05,
            centeredSlides: true,
            spaceBetween: 6,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
          }
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} w-1.5 h-1.5 md:w-2 md:h-2 bg-white/50 rounded-full mx-1 cursor-pointer transition-all duration-300 hover:bg-white"></span>`;
          },
          bulletActiveClass: '!bg-blue-800', // Cambiar el color activo a azul
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-full px-2 md:px-0"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className="w-full">
            <BannerSlide banner={banner} />
          </SwiperSlide>
        ))}

        <NavigationButton
          direction="prev"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <NavigationButton
          direction="next"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </Swiper>
    </section>
  );
};

export default BannerSection;