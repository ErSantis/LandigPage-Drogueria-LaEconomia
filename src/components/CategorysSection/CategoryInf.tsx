import { Category } from '../../types/category.type'
import { importIcons, importImage } from '../../utils/importMedia'

const CategoryInf = ({ category }: { category: Category }) => {
    return (
        <div className="w-full h-auto rounded-lg p-5 bg-white">
            <div className="w-full h-auto gap-2">
                <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-neutral-900">{category.name}</span>
                    <img src={importIcons(category.icon)} alt="icon" className="w-6 h-6" />
                </div>
                <span className="text-[13px] font-normal text-black-base mt-2">
                    {category.description}
                </span>
            </div>

            {/* Grid de productos */}
            <div className="grid grid-cols-3 gap-4 w-full h-full mt-4 hover:scale-105 transition-transform duration-300 ease-in-out">
                {category.products.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center flex-col gap-2 w-full h-full "
                    >
                        <div className="relative aspect-square w-[70px] h-[70px] rounded-full border border-gray-200 overflow-visible">
                            <img
                                src={importImage(product.image)}
                                className="absolute inset-0 w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-900 text-center">
                            {product.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default CategoryInf