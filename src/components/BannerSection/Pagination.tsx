// components/BannerSection/Pagination.tsx
interface PaginationProps {
    total: number;
    active: number;
  }
  
  export const PaginationC = ({ total, active }: PaginationProps) => {
    return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
        key={index}
        className={`
          w-2 h-2 rounded-full transition-all
          ${active === index ? 'bg-blue-500' : 'bg-white/50'}
        `}
        />
      ))}
    </div>
    );
  };