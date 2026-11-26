export const products = [
  {
    id: 504,
    nombre: "Cookies Vainilla y Chips de Chocolate",
    categoria: "Cookies",
    imagen: "/img/cookies-vainilla-chips.webp",
    descripcion:
      "Las clásicas cookies con chips de chocolate, preparadas con harina de trigo sarraceno, harina de almendras, harina de arroz integral, esencia de vainilla, aceite de coco, azúcar mascabo, polvo de hornear sin aluminio y chips de chocolate amargo. Sin TACC, no apto celíacos.",
    precio: 13000,
    stock: 9,
  },
  {
    id: 508,
    nombre: "Cookies de Coco y Vainilla",
    categoria: "Cookies",
    imagen: "/img/cookies-coco-vainilla.webp",
    descripcion:
      "Frescas cookies de coco y vainilla elaboradas con coco, almidón de maíz, huevo, azúcar mascabo, aceite vegetal, esencia de vainilla y polvo de hornear sin aluminio. Sin TACC. No apto celíacos.",
    precio: 13000,
    stock: 10,
  },
  {
    id: 511,
    nombre: "Cookies Chocolate",
    categoria: "Cookies",
    imagen: "/img/cookies-chocolate.webp",
    descripcion:
      "Irresistibles cookies de chocolate, hechas con harina de almendras, harina de arroz, aceite de coco, cacao, huevo, azúcar mascabo, polvo de hornear y chips de chocolate semiamargo. Sin TACC. No apto celíacos.",
    precio: 13000,
    stock: 10,
  },
  {
    id: 514,
    nombre: "Cookies Marmoladas",
    categoria: "Cookies",
    imagen: "/img/cookies-marmoladas.webp",
    descripcion:
      "Deliciosas cookies marmoladas, elaboradas con harina de almendras, harina de arroz integral, harina de trigo sarraceno, cacao, huevo, azúcar mascabo, aceite vegetal, esencia de vainilla, polvo de hornear y bicarbonato sin aluminio. Sin TACC. No apto celíacos.",
    precio: 13000,
    stock: 10,
  },
  {
    id: 571,
    nombre: "Cookies Surtidas",
    categoria: "Cookies",
    imagen: "/img/cookies-surtidas.webp",
    descripcion:
      "Una deliciosa variedad de nuestras mejores cookies surtidas en packs de 12 o 16 unidades, perfectas para compartir o probar un poco de todo. Sin TACC. Para mayores de 2 años.",
    opciones: [
      { id: 1488, etiqueta: "x12", precio: 13000, stock: 10 },
      { id: 1487, etiqueta: "x16", precio: 17000, stock: 7 },
    ],
  },
  {
    id: 659,
    nombre: "Muffins Surtidos",
    categoria: "Muffins",
    imagen: "/img/muffins-surtidos.webp",
    descripcion:
      "Muffins congelados surtidos: banana, carrot cake y chocolate. Sin aditivos. Ideal para compartir en familia.",
    opciones: [
      { id: 1653, etiqueta: "X9", precio: 18000, stock: 10 },
      { id: 1654, etiqueta: "X12", precio: 23000, stock: 6 },
    ],
  },
  {
    id: 661,
    nombre: "Muffin de Banana",
    categoria: "Muffins",
    imagen: "/img/muffin-banana.webp",
    descripcion:
      "Muffins de Banana Congelados x9. ¡Sin TACC y aptos para bebés desde 6 meses! Elaborados con banana natural, huevo y harinas nutritivas.",
    precio: 20000,
    stock: 5,
  },
  {
    id: 663,
    nombre: "Muffin de Carrot Cake",
    categoria: "Muffins",
    imagen: "/img/muffin-carrot-cake.webp",
    descripcion:
      "Muffins de Carrot Cake Congelados x9. ¡Deliciosos y sin TACC! Aptos para niños desde los 2 años. Con zanahoria, harina de arroz integral, huevo y ralladura de naranja.",
    precio: 15000,
    stock: 5,
  },
  {
    id: 667,
    nombre: "Muffin de Chocolate",
    categoria: "Muffins",
    imagen: "/img/muffin-chocolate-vegano.webp",
    descripcion:
      "Muffin de chocolate vegano congelado pack x9. Hechos con cacao amargo, harina integral y azúcar mascabo. Una opción rica y práctica para la merienda o el desayuno.",
    precio: 16000,
    stock: 5,
  },
  {
    id: 669,
    nombre: "Muffin de Carrot Cake Sin Azúcar",
    categoria: "Muffins",
    imagen: "/img/muffin-carrot-cake.webp",
    descripcion:
      "Muffins de Carrot Cake Congelados x9. ¡Sin TACC, sin azúcar agregada y aptos para bebés desde 6 meses! Endulzados naturalmente con dátiles.",
    precio: 17000,
    stock: 4,
  },
  {
    id: 675,
    nombre: "Waffles Surtidos",
    categoria: "Waffles",
    imagen: "/img/waffles-surtidos.webp",
    descripcion:
      "El doble de variedad y sabor para compartir. Nuestro pack de Waffles Surtidos es ideal para reuniones, eventos o para tener un stock de tus gustos favoritos.",
    opciones: [
      { id: 1535, etiqueta: "X10", precio: 21000, stock: 4 },
      { id: 1531, etiqueta: "X16", precio: 33000, stock: 4 },
    ],
  },
  {
    id: 676,
    nombre: "Waffles de brócoli y pollo",
    categoria: "Waffles",
    imagen: "/img/waffles-brocoli-pollo.webp",
    descripcion:
      "Nuestros Waffles de Brócoli y pollo son la opción sabrosa y nutritiva para los amantes de lo natural. Vienen en packs de 10 unidades.",
    precio: 30000,
    stock: 5,
  },
  {
    id: 678,
    nombre: "Waffles de Calabaza",
    categoria: "Waffles",
    imagen: "/img/waffles-calabaza.webp",
    descripcion:
      "Un toque dulce y reconfortante. Nuestros Waffles de Calabaza, disponibles en packs de 10 unidades, son ideales para cualquier momento del día.",
    precio: 22000,
    stock: 5,
  },
  {
    id: 680,
    nombre: "Waffles de Zapallito",
    categoria: "Waffles",
    imagen: "/img/waffles-zapallito.webp",
    descripcion:
      "Ligeros y frescos, nuestros Waffles de Zapallito son una opción deliciosa y saludable en packs de 10 unidades.",
    precio: 18000,
    stock: 5,
  },
  {
    id: 682,
    nombre: "Waffles de Acelga",
    categoria: "Waffles",
    imagen: "/img/waffles-acelga.webp",
    descripcion:
      "Nuestros Waffles Saludables de Acelga son una opción nutritiva y llena de sabor, disponibles en packs de 10 unidades.",
    precio: 16000,
    stock: 5,
  },
  {
    id: 684,
    nombre: "Untable de Zanahoria",
    categoria: "Snacks Salados",
    imagen: "/img/untable-zanahoria.webp",
    descripcion:
      "Delicioso y saludable untable de zanahoria por 150 grs, perfectos para acompañar tus comidas o como un snack nutritivo.",
    precio: 3600,
    stock: 2,
  },
  {
    id: 686,
    nombre: "Chipas de Batata y Queso",
    categoria: "Snacks Salados",
    imagen: "/img/chipas-batata-queso.webp",
    descripcion:
      "Exquisitas chipas de batata y queso, una combinación irresistible para los amantes de los sabores intensos.",
    precio: 7800,
    stock: 3,
  },
  {
    id: 688,
    nombre: "Crackers Con TACC",
    categoria: "Snacks Salados",
    imagen: "/img/crackers-con-tacc.webp",
    descripcion:
      "Crackers Con TACC, el snack crujiente y delicioso que te acompaña en todo momento.",
    precio: 6200,
    stock: 2,
  },
  {
    id: 690,
    nombre: "Crackers Sin TACC",
    categoria: "Snacks Salados",
    imagen: "/img/crackers-sin-tacc.webp",
    descripcion:
      "Crackers sin TACC caseras en pack de 100 g. Crocantes, prácticas y elaboradas con ingredientes simples. Ideales para acompañar comidas, picadas o para una colación liviana.",
    precio: 4000,
    stock: 0,
  },
  {
    id: 693,
    nombre: "Alfajores Saludables Surtidos",
    categoria: "Alfajores",
    imagen: "/img/alfajores-surtidos.webp",
    descripcion:
      "Alfajores artesanales elaborados con ingredientes naturales y rellenos cremosos a base de frutas secas y dátiles. Vienen surtidos y congelados ideales para freezar y consumir cuando quieras. Disponibles en presentaciones de 12 o 16 unidades.",
    opciones: [
      { id: 1478, etiqueta: "12 unidades", precio: 31000, stock: 9 },
      { id: 1479, etiqueta: "16 unidades", precio: 41500, stock: 8 },
    ],
  },
  {
    id: 724,
    nombre: "Box Festejo",
    categoria: "Box",
    imagen: "/img/box-festejo.webp",
    descripcion:
      "¡La solución ideal para tu próxima fiesta o reunión! Nuestra Box Festejo de Iupi combina 12 alfajorcitos, 12 mini muffins y 12 cookies (elige hasta 3 sabores), además de una bandeja de fainá de calabaza, 10 chipacitos de batata y queso, crackers con semillas y untable de zanahoria. Rinde para 10 niños o 6 adultos. ¡Se entrega todo fresco y reservando con 7 días de anticipación!",
    precio: 75000,
    stock: 5,
  },
  {
    id: 727,
    nombre: "Box Degustación Dulce",
    categoria: "Box",
    imagen: "/img/box-degustacion-dulce.webp",
    descripcion:
      "Descubre nuestra Box Degustación Dulce de Iupi, perfecta para pequeñas celebraciones o para probar un poco de todo. Incluye 12 alfajorcitos, 12 cookies y 12 mini muffins. ¡Rinde para 5 niños y puedes elegir 2-3 sabores de cada producto! Se entrega todo fresco, reservando con 7 días de anticipación.",
    precio: 50000,
    stock: 4,
  },
];
