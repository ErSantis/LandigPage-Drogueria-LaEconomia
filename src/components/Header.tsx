import { CartIcon, CuponesIcon, DropdownIcon, LocationIcon, SearchIcon, UserIcon } from "./Icons"
import NavBar from "./NavBar"


const Header = () => {
    return (
        <header className="w-full">

            {/*Video*/}
            <div className="w-full h-10">
                <video autoPlay loop muted className="w-full h-full object-cover">
                    <source src="videos/bannersup.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>


            {/*Div principal*/}
            <div className="w-full h-20 px-20 flex items-center justify-between bg-zinc-50 gap-12">

                {/*Div Logo, Barra de busqueda y acciones de usuario*/}
                <div className="w-full h-11 flex items-center gap-12">

                    {/* Logo */}
                    <div className="w-1/4 h-full">
                        <img
                            src="images/Logo.png"
                            alt="La Economía Droguería"
                            className="h-full object-contain"
                        />
                    </div>

                    {/* Barra de búsqueda */}
                    <div className="w-3/4 h-11 py-2 px-4 flex items-center justify-center bg-gray-100 rounded-lg shadow-inner">
                        <div className="flex items-center h-full w-full">
                            <input
                                type="text"
                                placeholder="Buscar por productos, marcas y más..."
                                className="flex-1 bg-transparent outline-none text-sm text-[14px] text-gray-700 w-full h-full font-popins"
                            />
                            <SearchIcon />
                        </div>
                    </div>

                    {/* Acciones de usuario */}
                    <div className="flex items-center gap-4 h-6 text-gray-700">
                        <div className="flex items-center gap-1 h-full">
                            <LocationIcon />
                            <span className="font-poppins text-[14px] font-normal leading-[20px]">Barranquilla</span>
                        </div>
                        <div className="flex items-center gap-1 h-full">
                            <UserIcon />
                            <span className="font-poppins text-[14px] font-normal leading-[20px]">Edgardo</span>
                            <DropdownIcon />

                        </div>
                        <div className="flex items-center gap-1 h-full">
                            <CuponesIcon />
                            <span className="font-poppins text-[14px] font-normal leading-[20px]">Cupones</span>
                        </div>
                        <div className="relative">
                            <CartIcon />
                        </div>
                    </div>

                </div>
            </div>
            <NavBar />
            {/* Div de imagenes */}
        </header>
    )
}

export default Header