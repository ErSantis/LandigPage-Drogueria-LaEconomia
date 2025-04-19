import { Product } from "../../types/product.type";
import { importImage } from "../../utils/importMedia";
import { formatCurrency } from "../../utils/formatCurrency";
import { AddCartIcon, InfoIcon } from "../Icons";
import { Link } from "react-router-dom";

const BestOffersProduct = ({ product }: { product: Product }) => {
    //Destrucurando el producto

    const { baseProduct, newPrice, originalPrice, priceGr, badges } = product;

    return (
        <div className="w-[230px] h-auto bg-white gap-2 p-2 pt-2 pb-4 rounded-lg border">
            {/* Imagen del producto */}
            <div className="w-[197px] h-[197px] gap-[10px]">
                <img
                    src={importImage(baseProduct.image)}
                    alt="product"
                    className="w-full h-full object-cover rounded"
                />
            </div>

            {/* Atributos del producto*/}
            <div className="w-[197px] h-[178px] px-2 mt-2">
                <span className="text-sm font-medium text-neutral-900">
                    {baseProduct.name}
                    <br />
                    {baseProduct.description}
                </span>
                <h6 className="text-neutral-900 font-bold text-xl">
                    {formatCurrency(baseProduct.price)}
                </h6>
                {newPrice && (
                    <div className="flex items-center gap-0.5">
                        <span className="font-semibold text-lg text-green-600">
                            {formatCurrency(newPrice)}
                        </span>
                        <InfoIcon />
                    </div>
                )}
                {originalPrice && (
                    <>
                        <span className="text-sm font-normal text-gray-500 line-through font-poppins">
                            {formatCurrency(originalPrice)}
                        </span>
                        <br />
                    </>
                )}
                {priceGr && (
                    <span className="font-normal text-[10px] text-gray-500">
                        Gramo a ${priceGr}
                    </span>
                )}
                <div className="flex items-center gap-1">
                    {badges?.discount && (
                        <div className="w-11 h-7 gap-[10px] py-1 px-2 rounded bg-green-600">
                            <span className="font-semibold text-base text-white">
                                {badges.discount}%
                            </span>
                        </div>
                    )}
                    {badges?.isExclusive && (
                        <div className="w-[103px] h-7 gap-[10px] px-2 rounded border bg-emerald-50">
                            <span className="text-xs font-semibold text-green-600">
                                Exclusivo Web
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Botón de agregar al carrito */}
            <Link
                to="#"
                className="w-[180px] h-10 gap-2 py-2 px-5 bg-blue-600 text-white text-center rounded-full flex items-center justify-center hover:bg-blue-700"
            >
                <span className="font-medium text-base">Agregar</span>
                <AddCartIcon />
            </Link>
        </div>
    );
};

export default BestOffersProduct;
