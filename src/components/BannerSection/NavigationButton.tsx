// components/BannerSection/NavigationButton.tsx
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';

interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

export const NavigationButton = ({ direction, onClick }: NavigationButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 -mt-[15px] md:-mt-[25px] z-10
        flex justify-center items-center
        w-[20px] h-[20px] md:w-[30px] md:h-[30px]
        bg-[#1c58b7] text-white
        rounded-xl md:rounded-2xl
        border border-[#194c9e]
        shadow-[1px_1px_4px_0_rgba(0,0,0,0.2)]
        font-poppins
        focus:outline-none
        hidden md:flex
        ${direction === 'prev' ? 'left-[5px] md:left-[10px]' : 'right-[5px] md:right-[10px]'}
      `}
    >
      {direction === 'prev' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  );
};