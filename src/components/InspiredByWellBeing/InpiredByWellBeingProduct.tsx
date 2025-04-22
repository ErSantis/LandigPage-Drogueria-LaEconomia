import { importImage } from '../../utils/importMedia'

interface ProductWellBeing {
    id: number
    name: string
    image: string
}

const InspiredByWellBeingProduct = ({ product }: { product: ProductWellBeing }) => {
    return (
        <div
            key={product.id}
            className="flex items-center flex-col gap-2 w-full h-full"
        >
            <div className="relative flex items-center justify-center rounded-full bg-white border-solid border-white w-[60px] h-[60px] gap-3 md:w-[140px] md:h-[140px] md:gap-3 shadow-[0px_17.8px_23.73px_0px_#0000000A]">
                <img
                    src={importImage(product.image)}
                    alt={product.name}
                    className="absolute w-auto h-auto max-w-[100%] max-h-[100%] transform transition-all duration-300 ease-in-out group-hover:scale-110"
                />
            </div>
            <span className="text-[11px] text-gray-900 font-semibold text-center md:text-sm md:font-medium">
                {product.name}
            </span>
        </div>
    )
}

export default InspiredByWellBeingProduct
