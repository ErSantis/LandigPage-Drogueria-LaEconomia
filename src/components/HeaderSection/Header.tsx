// Header.tsx
import {
  CartIcon,
  CatsIcon,
  CuponesIcon,
  DropdownIcon,
  ExitMenuIcon,
  HomeIcon,
  LocationIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "../Icons";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import NavBarMobile from "./NavBarMobile";
import { importImage, importVideo } from "../../utils/importMedia";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      console.log('Cambió el tamaño:', isNowMobile); // Para debug
      setIsMobile(isNowMobile);
    };

    // Ejecutar también al inicio
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-full h-auto md:h-10 bg-blue-700 overflow-hidden">
        <video
          key={isMobile ? 'mobile' : 'desktop'} // Fuerza la recreación del elemento
          autoPlay
          loop
          muted
          className="w-full md:h-full object-contain md:object-cover"
        >
          <source
            src={importVideo(isMobile ? "bannersupmobile.mp4" : "bannersup.mp4")}
            type="video/mp4"
          />
        </video>
      </div>

      {/*Div principal*/}
      <div
        className="w-full px-20 flex flex-col md:flex-row items-center bg-zinc-50 md:h-20 md:gap-12 
                           md:justify-between md:px-20 px-4 py-4"
      >
        {/*Div Logo y acciones de usuario*/}
        <div className="w-full flex items-center justify-between md:w-auto md:gap-12">
          {/* Botón de menú móvil */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon />
          </button>

          {/* Logo */}
          <div className="h-11 md:h-16 md:w-[180px]">
            {" "}
            {/* Ajustado el tamaño para desktop */}
            <img
              src={importImage("Logo.png")}
              alt="La Economía Droguería"
              className="h-full object-contain"
            />
          </div>

          {/* Acciones de usuario versión móvil */}
          <div className="flex items-center gap-4 md:hidden">
            <UserIcon />
            <CuponesIcon />
            <div className="relative">
              <CartIcon />
            </div>
          </div>
        </div>

        {/* Barra de búsqueda */}
        <div className="w-full mt-4 md:mt-0 md:w-3/4 h-11 py-2 px-4 flex items-center justify-center bg-gray-100 rounded-lg shadow-inner">
          <div className="flex items-center h-full w-full">
            <input
              type="text"
              placeholder="Buscar por productos, marcas y más..."
              className="flex-1 bg-transparent outline-none text-sm text-[14px] text-gray-700 w-full h-full font-popins"
            />
            <SearchIcon />
          </div>
        </div>

        {/* Acciones de usuario versión desktop */}
        <div className="hidden md:flex items-center gap-4 h-6 text-gray-700">
          <div className="flex items-center gap-1 h-full">
            <LocationIcon />
            <span className="font-poppins text-[14px] font-normal leading-[20px]">
              Barranquilla
            </span>
          </div>
          <div className="flex items-center gap-1 h-full">
            <UserIcon />
            <span className="font-poppins text-[14px] font-normal leading-[20px]">
              Edgardo
            </span>
            <DropdownIcon />
          </div>
          <div className="flex items-center gap-1 h-full">
            <CuponesIcon />
            <span className="font-poppins text-[14px] font-normal leading-[20px]">
              Cupones
            </span>
          </div>
          <div className="relative">
            <CartIcon />
          </div>
        </div>
      </div>

      {/* Ubicación versión móvil */}
      <div className="md:hidden w-full bg-blue-50 p-4 flex items-center gap-2">
        <LocationIcon />
        <span className="text-blue-700 font-poppins text-[14px]">
          Barranquilla
        </span>
        <DropdownIcon />
      </div>

      {/* NavBar */}
      <NavBar />

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-y-hidden bg-white z-50 shadow-lg md:hidden">
          <div className="p-4 flex justify-between items-center ">
            <span className="font-poppins font-medium invisible">
              Placeholder
            </span>
            <button onClick={() => setIsMenuOpen(false)}>
              <ExitMenuIcon />
            </button>
          </div>
          <div className="h-12">
            <div className="h-full flex items-center py-2 px-5">
              <HomeIcon />
              <span className="font-poppins font-medium ml-[10px] text-neutral-700">
                Inicio
              </span>
            </div>
            <hr className="border-gray-200" />
            <div className="h-full flex items-center py-2 px-5">
              <CatsIcon />
              <span className="font-poppins font-medium ml-[10px] text-neutral-700">
                Categorías
              </span>
            </div>
            <hr className="border-gray-200" />
            {/* Aquí van las secciones del NavBar */}
            <NavBarMobile />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
