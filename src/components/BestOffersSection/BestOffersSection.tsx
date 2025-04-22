import { useRef } from 'react'
import { importIcons} from '../../utils/importMedia'
import { Link } from 'react-router-dom'
import BestOffersProduct from './BestOffersProduct'
import { products } from '../../data/product.data'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import { NavigationButton } from '../BannerSection/NavigationButton'


const BestOffersSection = ({ title, icon }: { title: string, icon: string }) => {
    const swiperRef = useRef<SwiperType>(null);

    return (
        <>
            {/* Header más compacto en móvil */}
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

            {/* Contenedor del Swiper */}
            <div className='w-full h-auto mt-4 md:mt-5'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    spaceBetween={8}
                    slidesPerView="auto"
                    allowTouchMove={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 2.2,
                            spaceBetween: 8,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 16,
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
                    className="!overflow-visible px-4 md:px-0" // Padding en móvil
                >
                    {products.map((product, index) => (
                        <SwiperSlide
                            key={index}
                            className="!w-auto" // Permite que el slide tome el ancho del contenido
                        >
                            <BestOffersProduct product={product} />
                        </SwiperSlide>
                    ))}

                    {/* Botones de navegación solo visibles en desktop */}
                    <div className="hidden md:block">
                        <NavigationButton
                            direction="prev"
                            onClick={() => swiperRef.current?.slidePrev()}
                        />
                        <NavigationButton
                            direction="next"
                            onClick={() => swiperRef.current?.slideNext()}
                        />
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default BestOffersSection