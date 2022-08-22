// eslint-disable-next-line max-len
import { nanoid } from 'nanoid'
import image13 from '../../../../assets/images/products/coffee-arabe.png'
import image7 from '../../../../assets/images/products/coffee-capuccino.png'
import image10 from '../../../../assets/images/products/coffee-chocolate-quente.png'
import image5 from '../../../../assets/images/products/coffee-com-leite.png'
import image11 from '../../../../assets/images/products/coffee-cubano.png'
import image2 from '../../../../assets/images/products/coffee-expresso-americano.png'
import image3 from '../../../../assets/images/products/coffee-expresso-cremoso.png'
import image4 from '../../../../assets/images/products/coffee-expresso-gelado.png'
import image1 from '../../../../assets/images/products/coffee-expresso-tradicional.png'
import image12 from '../../../../assets/images/products/coffee-havaiano.png'
import image6 from '../../../../assets/images/products/coffee-latte.png'
import image8 from '../../../../assets/images/products/coffee-macchiato.png'
import image9 from '../../../../assets/images/products/coffee-mocaccino.png'

import { Product } from '../../../../domain/models/product'

export const productItems: Product[] = [
  {
    id: nanoid(),
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: {
      url: image1,
      description: 'Café expresso tradicional em uma xícara branca em cima de um pires branco',
    },
    name: 'Expresso Tradicional',
    price: 9.5,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: {
      url: image2,
      description: 'Café expresso americano em uma xícara branca em cima de um pires branco',
    },
    name: 'Expresso Americano',
    price: 8,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Café expresso tradicional com espuma cremosa',
    image: {
      url: image3,
      description: 'Café expresso cremoso em uma xícara branca em cima de um pires branco',
    },
    name: 'Expresso Cremoso',
    price: 10,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: {
      url: image4,
      description: 'Café expresso gelado em uma xícara branca em cima de um pires branco',
    },
    name: 'Expresso Gelado',
    price: 8.5,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'gelado',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: {
      url: image5,
      description: 'Café com leite em uma xícara branca em cima de um pires branco',
    },
    name: 'Café com Leite',
    price: 10.5,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'com leite',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: {
      url: image6,
      description: 'Café latte em uma xícara branca em cima de um pires branco',
    },
    name: 'Latte',
    price: 12,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'com leite',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: {
      url: image7,
      description: 'Café capuccino em uma xícara branca em cima de um pires branco',
    },
    name: 'Capuccino',
    price: 11.5,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'com leite',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    image: {
      url: image8,
      description: 'Café macchiato em uma xícara branca em cima de um pires branco',
    },
    name: 'Macchiato',
    price: 11,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'com leite',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: {
      url: image9,
      description: 'Café macchiato em uma xícara branca em cima de um pires branco',
    },
    name: 'Mocaccino',
    price: 12.5,
    tags: [
      {
        id: nanoid(),
        name: 'tradicional',
      },
      {
        id: nanoid(),
        name: 'com leite',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: {
      url: image10,
      description: 'Café com chocolate quente em uma xícara branca em cima de um pires branco',
    },
    name: 'Chocolate Quente',
    price: 13,
    tags: [
      {
        id: nanoid(),
        name: 'especial',
      },
      {
        id: nanoid(),
        name: 'com leite',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: {
      url: image11,
      description: 'Café cubano em uma xícara branca em cima de um pires branco',
    },
    name: 'Cubano',
    price: 13.5,
    tags: [
      {
        id: nanoid(),
        name: 'especial',
      },
      {
        id: nanoid(),
        name: 'alcoólico',
      },
      {
        id: nanoid(),
        name: 'gelado',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: {
      url: image12,
      description: 'Café havaiano em uma xícara branca em cima de um pires branco',
    },
    name: 'Havaiano',
    price: 10,
    tags: [
      {
        id: nanoid(),
        name: 'especial',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: {
      url: image13,
      description: 'Café árabe em uma xícara branca em cima de um pires branco',
    },
    name: 'Árabe',
    price: 10,
    tags: [
      {
        id: nanoid(),
        name: 'especial',
      },
    ],
  },
  {
    id: nanoid(),
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: {
      url: image13,
      description: 'Café irlandes em uma xícara branca em cima de um pires branco',
    },
    name: 'Irlandês',
    price: 14.5,
    tags: [
      {
        id: nanoid(),
        name: 'especial',
      },
      {
        id: nanoid(),
        name: 'alcoólico',
      },
    ],
  },
]
