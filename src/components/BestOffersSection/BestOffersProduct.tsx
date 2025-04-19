import { Product } from "../../types/product.type";
import { importImage } from "../../utils/importMedia";
import { formatCurrency } from "../../utils/formatCurrency";
import { AddCartIcon, InfoIcon } from "../Icons";
import { Link } from "react-router-dom";

const BestOffersProduct = ({ product }: { product: Product }) => {
    const { baseProduct, newPrice, originalPrice, priceGr, badges } = product;

    return (
        <div className="w-[160px] md:w-[230px] h-[380px] md:h-[450px] bg-white p-2 pt-2 pb-4 rounded-lg border flex flex-col">
            {/* Imagen del producto - altura fija */}
            <div className="w-full h-[140px] md:h-[197px] mb-2">
                <img
                    src={importImage(baseProduct.image)}
                    alt="product"
                    className="w-full h-full object-contain rounded"
                />
            </div>

            {/* Contenido - flex-grow para ocupar espacio disponible */}
            <div className="flex flex-col flex-grow justify-between">
                {/* Información del producto */}
                <div className="space-y-1">
                    <span className="text-xs md:text-sm font-medium text-neutral-900 line-clamp-2">
                        {baseProduct.name}
                        <br />
                        {baseProduct.description}
                    </span>

                    <h6 className="text-neutral-900 font-bold text-lg md:text-xl">
                        {formatCurrency(baseProduct.price)}
                    </h6>

                    {newPrice && (
                        <div className="flex items-center gap-0.5">
                            <span className="font-semibold text-base md:text-lg text-green-600">
                                {formatCurrency(newPrice)}
                            </span>
                            <InfoIcon />
                        </div>
                    )}

                    {originalPrice && (
                        <span className="block text-xs md:text-sm font-normal text-gray-500 line-through font-poppins">
                            {formatCurrency(originalPrice)}
                        </span>
                    )}

                    {priceGr && (
                        <span className="block text-[9px] md:text-[10px] font-normal text-gray-500">
                            Gramo a ${priceGr}
                        </span>
                    )}

                    <div className="flex items-center gap-1 mt-1">
                        {badges?.discount && (
                            <div className="w-9 md:w-11 h-6 md:h-7 gap-[10px] rounded bg-green-600 flex items-center justify-center">
                                <span className="font-semibold text-sm md:text-base text-white">
                                    {badges.discount}%
                                </span>
                            </div>
                        )}
                        {badges?.isExclusive && (
                            <div className="w-[90px] md:w-[103px] h-6 md:h-7 gap-[10px] px-2 rounded border bg-emerald-50">
                                <span className="text-[10px] md:text-xs font-semibold text-green-600">
                                    Exclusivo Web
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Botón de agregar - siempre al final */}
                <Link
                    to="#"
                    className="w-full mt-2 h-8 md:h-10 gap-2 py-1.5 md:py-2 px-4 md:px-5 bg-blue-600 text-white text-center rounded-full flex items-center justify-center hover:bg-blue-700"
                >
                    <span className="font-medium text-sm md:text-base">Agregar</span>
                    <AddCartIcon />
                </Link>
            </div>
        </div>
    );
};

export default BestOffersProduct;
