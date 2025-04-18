// components/BannerSection/BannerSlide.tsx
import { Banner } from '../../types/banner.type';

interface BannerSlideProps {
    banner: Banner;
}
export const BannerSlide = ({ banner }: BannerSlideProps) => {
    return (
      <a href={banner.link} className="block w-full h-full">
        <img
          src={banner.image}
          alt={banner.alt}
          className="w-full h-full object-cover rounded-lg md:rounded-none"
        />
      </a>
    );
  };