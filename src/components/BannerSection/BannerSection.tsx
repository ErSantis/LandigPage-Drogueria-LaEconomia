// components/BannerSection/BannerSection.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { NavigationButton } from './NavigationButton';
import { BannerSlide } from './BannerSlide';
import { banners } from '../../data/banner.data';
import 'swiper/swiper-bundle.css';

export const BannerSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative w-full h-[422px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} w-2 h-2 bg-white/50 rounded-full mx-1 cursor-pointer transition-all duration-300 hover:bg-white"></span>`;
          },
          bulletActiveClass: '!bg-white',
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-full [&_.swiper-pagination]:bottom-6 [&_.swiper-pagination]:!flex [&_.swiper-pagination]:items-center [&_.swiper-pagination]:justify-center"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
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
    </div>
  );
};