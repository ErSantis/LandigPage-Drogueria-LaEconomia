import { ChevronDown } from "../Icons"

const NavBar = () => {

    const secciones = [
        "Medicamentos",
        "Botiquin",
        "Salud y Belleza",
        "Cuidados del bebé",
        "Alimentos y bebidas",
        "Varios"
    ]
    return (
        <nav className="w-full h-10 bg-blue-700 text-white px-20 py-2">

            <ul className="w-full  h-full flex items-center gap-8 text-sm">
                {secciones.map((seccion, index) => (
                    <li key={index} className="gap-2 flex items-center font-poppins text-sm font-medium ">
                        <span>{seccion}</span>
                        <ChevronDown />
                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default NavBar