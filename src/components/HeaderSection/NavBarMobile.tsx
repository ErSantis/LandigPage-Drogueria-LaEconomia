import { DropdownIcon } from "./Icons"

// NavBarMobile.tsx
const NavBarMobile = () => {
    const secciones = [
        "Medicamentos",
        "Botiquin",
        "Salud y Belleza",
        "Cuidados del bebé",
        "Alimentos y bebidas",
        "Varios"
    ]

    return (
        <div className="flex flex-col">
            {secciones.map((seccion, index) => (
                <div className="h-12">
                    <div key={index} className="h-full flex justify-between items-center py-2 px-5">
                        <span className="font-poppins text-base font-semibold text-neutral-800">{seccion}</span>
                        <DropdownIcon />
                    </div>
                    <hr className="border-gray-200" />
                </div>
            ))}
        </div>
    )
}

export default NavBarMobile