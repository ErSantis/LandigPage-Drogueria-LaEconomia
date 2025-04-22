// components/BannerSection/BannerSection.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { NavigationButton } from './NavigationButton';
import { BannerSlide } from './BannerSlide';
import 'swiper/swiper-bundle.css';
import { Banner } from '../../types/banner.type';

const BannerSection = ({ banners }: { banners: Banner[] }) => {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <div className="w-full h-full relative">

      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full z-20">
        <div className="absolute -left-2">
          <NavigationButton
            direction="prev"
            onClick={() => swiperRef.current?.slidePrev()}
          />
        </div>
        <div className="absolute -right-2">
          <NavigationButton
            direction="next"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>

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
          renderBullet: function (className) {
            return `<span class="${className} w-1.5 h-1.5 md:w-2 md:h-2 bg-white/50 rounded-full mx-1 cursor-pointer transition-all duration-300 hover:bg-white"></span>`;
          },
          bulletActiveClass: '!bg-blue-800',
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
      </Swiper>
    </div>

  );
};

export default BannerSection;