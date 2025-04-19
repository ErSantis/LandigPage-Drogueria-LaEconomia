import { useRef } from 'react'
import { importImage } from '../../utils/importMedia'
import { Link } from 'react-router-dom'
import BestOffersProduct from './BestOffersProduct'
import { products } from '../../data/product.data'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import { NavigationButton } from '../BannerSection/NavigationButton'


const BestOffersSection = () => {

    const swiperRef = useRef<SwiperType>(null);

    return (
        <>
            <div className='flex items-center'>
                <div className='flex items-center'>
                    <h5 className='text-2xl font-bold '>Las mejores ofertas</h5>
                    <img src={importImage('alarmIcon.png')} alt="alarm-icon" className='h-7 w-7 ml-1' />
                </div>
                <Link to="#" className='text-blue-700 font-medium text-base underline ml-4 my-1'>Ver todas</Link>
            </div>


            <div className='w-full h-auto mt-5 gap-8 flex items-center'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={5}
                    allowTouchMove={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 3.5,
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 0,
                        },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="!overflow-y-visible" // Permite que el contenido se desborde verticalmente
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}> {/* Altura automática */}
                            <BestOffersProduct product={product} />
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

        </>
    )
}

export default BestOffersSection