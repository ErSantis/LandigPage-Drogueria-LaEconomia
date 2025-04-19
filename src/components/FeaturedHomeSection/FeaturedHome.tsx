// FeaturedHome.tsx
import FeaturedProduct from "./FeaturedProduct"
import { FeturedSections } from "../../data/featuredSection.data"
import { Swiper, SwiperSlide } from 'swiper/react';

// Importar estilos de Swiper
import 'swiper/swiper-bundle.css';
import { importVideo } from "../../utils/importMedia";

const FeaturedHome = () => {
    return (
        <>
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

            <div className="w-full h-auto rounded-[9.7px] md:h-16 overflow-hidden ">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full md:h-full object-contain md:object-cover"
                >
                    <source
                        src={
                            window.innerWidth < 768
                                ? importVideo("animadomobile.mp4")
                                : importVideo("animaweb.mp4")
                        }
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

        </>
    )
}

export default FeaturedHome