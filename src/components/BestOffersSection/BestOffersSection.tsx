import { useRef } from 'react';
import { importIcons } from '../../utils/importMedia';
import { Link } from 'react-router-dom';
import BestOffersProduct from './BestOffersProduct';
import { products } from '../../data/product.data';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { NavigationButton } from '../BannerSection/NavigationButton';

const BestOffersSection = ({ title, icon }: { title: string, icon: string }) => {
    const swiperRef = useRef<SwiperType>(null);

    return (
        <div className="relative w-full overflow-hidden"> 

            {/* Header */}
            <div className='flex items-center gap-1'>
                <div className='flex items-center'>
                    <h5 className='text-lg md:text-2xl font-bold'>{title}</h5>
                    <img
                        src={importIcons(icon)}
                        alt="alarm-icon"
                        className='h-5 w-5 md:h-7 md:w-7 ml-1'
                    />
                </div>
                <Link
                    to="#"
                    className='text-blue-700 mx-4 font-medium text-sm md:text-base underline'
                >
                    Ver todos
                </Link>
            </div>
            {/* Swiper con botones externos */}
            <div className='w-full h-auto mt-4 md:mt-5 relative'>

            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full z-20">
        <div className="absolute -left-2 -top-4">
          <NavigationButton
            direction="prev"
            onClick={() => swiperRef.current?.slidePrev()}
          />
        </div>
        <div className="absolute -right-2 -top-4">
          <NavigationButton
            direction="next"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop={true} 
                    allowTouchMove={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 2.5,
                            spaceBetween: 60,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="!overflow-visible"
                >
                    {products.map((product, index) => (
                        <SwiperSlide
                            key={index}
                            className="w-full px-2"
                        >
                            <BestOffersProduct product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default BestOffersSection;