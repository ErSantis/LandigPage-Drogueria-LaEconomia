// FeaturedHome.tsx
import FeaturedProduct from "./FeaturedProduct"
import { FeturedSections } from "../../data/featuredSection.data"
import { Swiper, SwiperSlide } from 'swiper/react';

// Importar estilos de Swiper
import 'swiper/swiper-bundle.css';

const FeaturedHome = () => {
    return (
        <div className="w-full bg-white mt-4">
            <div className="px-4 md:px-40">
                <Swiper
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={6}
                    allowTouchMove={true}
                    style={{ padding: '20px 0' }} // Añade padding vertical
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
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                    className="!overflow-y-visible" // Permite que el contenido se desborde verticalmente
                >
                    {FeturedSections.map((section, index) => (
                        <SwiperSlide key={index} className="!h-auto"> {/* Altura automática */}
                            <FeaturedProduct
                                title={section.title}
                                image={section.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default FeaturedHome