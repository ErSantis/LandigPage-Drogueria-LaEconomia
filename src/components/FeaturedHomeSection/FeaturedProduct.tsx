// FeaturedProduct.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { importImage } from '../../utils/importMedia';

interface FeaturedProductProps {
    title: string;
    image: string;
}

const FeaturedProduct = React.memo(({ title, image }: FeaturedProductProps) => {
    return (
        <Link
            to=""
            className="relative flex flex-col items-center gap-2 w-full justify-center group no-underline"
        >
            <div className="relative flex items-center justify-center rounded-full  border-solid border-blue-300 w-[60px] h-[60px] border-[2.02px] gap-[5.04px] md:w-[100px] md:h-[100px] md:border-[3.36px] md:gap-[8.4px] ">
                <img
                    src={importImage(image)}
                    alt={title}
                    className="absolute w-auto h-auto max-w-[120%] max-h-[120%] transform  transition-all duration-300 ease-in-out group-hover:scale-110"
                />
            </div>
            <span className="text-xs font-normal text-gray-900 text-center md:text-base md:font-medium">{title}</span>
        </Link>
    );
});

export default FeaturedProduct;