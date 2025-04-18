import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedProductProps {
  title: string;
  image: string;
}

const FeaturedProduct = React.memo(({ title, image }: FeaturedProductProps) => {
  return (
    <Link 
      to="" // o la ruta que necesites, por ejemplo "/producto/1"
      className="relative flex flex-col items-center gap-2 h-33 w-full justify-center group no-underline"
    >
      <div className="relative flex items-center justify-center w-[100px] h-[100px] gap-[8.4px] rounded-full border-[3.36px] border-solid border-[#9EC8F1]">
        <img
          src={image}
          alt={title}
          className="absolute w-auto h-auto max-w-[120%] max-h-[120%] transform -translate-y-2 transition-all duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <span className="text-sm font-medium text-gray-900">{title}</span>
    </Link>
  );
});

export default FeaturedProduct;