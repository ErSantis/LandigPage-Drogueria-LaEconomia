import { Category } from "../types/category.type";

export const categorys: Category[] = [
  {
    id: 1,
    name: "Botiquin",
    icon: "pildora.png",
    description:
      "La selección ideal de productos para tu cuidado en todo momento.",
    products: [
      {
        id: 1,
        image: "dolex.png",
        name: "Cabeza y general",
      },
      {
        id: 2,
        image: "vick.png",
        name: "Tos",
      },
      {
        id: 3,
        image: "zinc.png",
        name: "Multivitaminicos",
      },
    ],
  },
  {
    id: 2,
    name: "Cuidado del bebé",
    icon: "tetero.png",
    description: "Todo un mundo de productos para los consentidos de la casa.",
    products: [
      {
        id: 1,
        image: "pañales.png",
        name: "Pañales",
      },
      {
        id: 2,
        image: "leche.png",
        name: "Leches infantiles",
      },
      {
        id: 3,
        image: "pañitos.png",
        name: "Pañitos húmedos",
      },
    ],
  },
  {
    id: 3,
    name: "Salud y belleza",
    icon: "uñas.png",
    description:
      "Encuentra aquí los marcas destacadas para cuidar de ti y tu familia.",
    products: [
      {
        id: 1,
        image: "facial.png",
        name: "Tratamiento facial",
      },
      {
        id: 2,
        image: "shampoo.png",
        name: "Shampoo y acondicionador",
      },
      {
        id: 3,
        image: "corporal.png",
        name: "Tratamiento corporal",
      },
    ],
  },
];
