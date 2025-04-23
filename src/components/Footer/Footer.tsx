
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { importIcons, importImage} from "../../utils/importMedia"

export default function Footer() {
  return (
    <footer className="w-full bg-white py-8 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* La empresa */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">La empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Misión, Visión e Historia
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Ética
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Nuestras Sucursales
                </Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Habeas Data
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Términos y condiciones de promociones
                </Link>
              </li>
            </ul>
          </div>

          {/* Club Vida Sana */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Club Vida Sana</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Beneficios del Club
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Ley 2300
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Consulta Aliados
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">3157823477</li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Radicar PQRS
                </Link>
              </li>
              <li className="text-gray-600 break-words">servicioalcliente@droguerialaeconomia.com</li>
            </ul>
          </div>

          {/* App Download */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">¡Descarga gratis la APP!</h3>

            {/* Desktop version with QR code */}
            <div className="hidden md:flex border rounded-lg p-4 items-center justify-between">
              <div className="w-24 h-24 relative">
                <img
                  src={importImage("qrCode.png")}
                  alt="QR Code para descargar la app"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-16 h-16 relative">
                <img
                  src={importIcons("logo.png")}
                  alt="Logo de la app"
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Mobile version with download button */}
            <div className="md:hidden">
              <Link
                to="#"
                className="flex items-center gap-4 bg-white rounded-full shadow-md p-3 border border-gray-100"
              >
                <div className="w-10 h-10 relative flex-shrink-0">
                    <img
                        src={importIcons("logo.png")}
                        alt="Logo de la app"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </div>
                <div className="text-gray-700">
                  <p className="text-sm">Descarga gratis</p>
                  <p className="font-medium">La Economía App</p>
                </div>
              </Link>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Síguenos en:</h4>
              <div className="flex space-x-4">
                <Link to="#" aria-label="YouTube">
                  <Youtube className="w-6 h-6 text-gray-600 hover:text-red-600" />
                </Link>
                <Link to="#" aria-label="Instagram">
                  <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-600" />
                </Link>
                <Link to="#" aria-label="Facebook">
                  <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                </Link>
                <Link to="#" aria-label="WhatsApp">
                  <MessageCircle className="w-6 h-6 text-gray-600 hover:text-green-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2024 Droguería La Economía. Todos los derechos reservados. v5.1 -
            <Link to="#" className="ml-1 underline hover:text-gray-900">
              Política de privacidad
            </Link>
          </p>
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">powered by</span>
            <img src={importIcons('mooba.png')} alt="Mooba logo" width={100} height={30} />
          </div>
        </div>
      </div>
    </footer>
  )
}
