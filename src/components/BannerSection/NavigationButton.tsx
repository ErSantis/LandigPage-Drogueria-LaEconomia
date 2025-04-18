import { ChevronLeftIcon, ChevronRightIcon } from "../Icons";

// components/BannerSection/NavigationButton.tsx
interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

export const NavigationButton = ({ direction, onClick }: NavigationButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 -mt-[25px] z-10
        flex justify-center items-center
        w-[30px] h-[30px]
        bg-[#1c58b7] text-white
        rounded-2xl
        border border-[#194c9e]
        shadow-[1px_1px_4px_0_rgba(0,0,0,0.2)]
        font-poppins
        focus:outline-none
        hidden md:flex
        ${direction === 'prev' ? 'left-[10px]' : 'right-[10px]'}
      `}
    >
      {direction === 'prev' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  );
};