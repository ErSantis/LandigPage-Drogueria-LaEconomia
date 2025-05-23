import {useRef} from "react";
import { importIcons} from "../../utils/importMedia";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { NavigationButton } from "../BannerSection/NavigationButton";
import Brand from "./Brand";
import { brands } from "../../data/brands.data";


const BestBrand = () => {
    const swiperRef = useRef<SwiperType>(null);

    
    return (
        <>
            <div className="relative w-full overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-1">
                    <div className="flex items-center">
                        <h5 className="text-lg md:text-2xl font-bold">Las mejores marcas</h5>
                        <img
                            src={importIcons('star.png')}
                            alt="alarm-icon"
                            className="h-5 w-5 md:h-7 md:w-7 ml-1"
                        />
                    </div>
                </div>

                {/* Swiper con botones externos */}
                <div className="w-full h-auto mt-4 md:mt-5 relative">
                    {/* Botones flotantes */}
                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 z-20">
                        <NavigationButton
                            direction="prev"
                            onClick={() => swiperRef.current?.slidePrev()}
                        />
                        <NavigationButton
                            direction="next"
                            onClick={() => swiperRef.current?.slideNext()}
                        />
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        spaceBetween={30}
                        allowTouchMove={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 10,
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
                        {brands.map((product, index) => (
                            <SwiperSlide key={index} className="w-full px-2">
                                <Brand product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default BestBrand;
