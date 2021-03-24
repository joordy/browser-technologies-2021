// Products to display on shop page
let products = [
  {
    id: 10001,
    image: {
      black_S: 'images/shirts/black_shirt_small.png',
      black: 'images/shirts/black_shirt.png',
      white_S: 'images/shirts/white_shirt_small.png',
      white: 'images/shirts/white_shirt.png',
    },
    name: 'T-Shirt men',
    type: 'shirt',
    categorie: 'shirts',
    gender: 'Male',
    sizes: ['s', 'm', 'l', 'xl', 'xxl'],
    color: ['black', 'white'],
    price: 24.99,
    material: {
      outer: '90% cotton, 10% polyester',
      washing: 'Machine wash tot 40°C',
    },
    aboutProduct: {
      neckline: 'Round neck',
      pattern: 'Mottled',
      itemNumber: '1KE22S01E-K11',
    },
    durability: {
      contains: 'This item meets the following sustainability criteria:',
      desc:
        'By buying cotton items from this brand, you support more sustainable cotton cultivation. Items with this label contain at least 50% cotton, from a retailer or brand that is committed to Better Cotton and invests in BCI Farmers. This does not mean that the product is made from physically traceable Better Cotton.',
    },
    reviews: {
      one: 1,
      two: 3,
      three: 6,
      four: 13,
      five: 50,
    },
  },
  {
    id: 10002,
    image: {
      black_S: 'images/shirts/black_shirt_small.png',
      black: 'images/shirts/black_shirt.png',
      white_S: 'images/shirts/white_shirt_small.png',
      white: 'images/shirts/white_shirt.png',
    },
    name: 'T-Shirt woman',
    type: 'shirt',
    categorie: 'shirts',
    gender: 'Woman',
    sizes: ['xs', 's', 'm', 'l', 'xl'],
    color: ['black', 'white'],
    price: 24.99,
    material: {
      outer: '90% cotton, 10% polyester',
      washing: 'Machine wash tot 40°C',
    },
    aboutProduct: {
      neckline: 'Round neck',
      pattern: 'Mottled',
      itemNumber: '1KE22S01E-K11',
    },
    durability: {
      contains: 'This item meets the following sustainability criteria:',
      desc:
        'By buying cotton items from this brand, you support more sustainable cotton cultivation. Items with this label contain at least 50% cotton, from a retailer or brand that is committed to Better Cotton and invests in BCI Farmers. This does not mean that the product is made from physically traceable Better Cotton.',
    },
    reviews: {
      one: 1,
      two: 3,
      three: 6,
      four: 13,
      five: 50,
    },
  },
  {
    id: 10003,
    image: {
      black_S: 'images/sweaters/black_sweater_small.png',
      black: 'images/sweaters/black_sweater.png',
      white_S: 'images/sweaters/white_sweater_small.png',
      white: 'images/sweaters/white_sweater.png',
    },
    name: 'Sweater men',
    type: 'sweater',
    categorie: 'sweaters',
    gender: 'Male',
    sizes: ['s', 'm', 'l', 'xl', 'xxl'],
    color: ['black', 'white'],
    price: 39.99,
    material: {
      outer: '90% cotton, 10% polyester',
      washing: 'Machine wash tot 40°C',
    },
    aboutProduct: {
      neckline: 'Round neck',
      pattern: 'Mottled',
      itemNumber: '1KE22S01E-K11',
    },
    durability: {
      contains: 'This item meets the following sustainability criteria:',
      desc:
        'By buying cotton items from this brand, you support more sustainable cotton cultivation. Items with this label contain at least 50% cotton, from a retailer or brand that is committed to Better Cotton and invests in BCI Farmers. This does not mean that the product is made from physically traceable Better Cotton.',
    },
    reviews: {
      one: 1,
      two: 3,
      three: 6,
      four: 13,
      five: 50,
    },
  },
  {
    id: 10004,
    image: {
      black_S: 'images/sweaters/black_sweater_small.png',
      black: 'images/sweaters/black_sweater.png',
      white_S: 'images/sweaters/white_sweater_small.png',
      white: 'images/sweaters/white_sweater.png',
    },
    name: 'Sweater woman',
    type: 'sweater',
    categorie: 'sweaters',
    gender: 'Woman',
    sizes: ['xs', 's', 'm', 'l', 'xl'],
    color: ['black', 'white'],
    price: 39.99,
    material: {
      outer: '90% cotton, 10% polyester',
      washing: 'Machine wash tot 40°C',
    },
    aboutProduct: {
      neckline: 'Round neck',
      pattern: 'Mottled',
      itemNumber: '1KE22S01E-K11',
    },
    durability: {
      contains: 'This item meets the following sustainability criteria:',
      desc:
        'By buying cotton items from this brand, you support more sustainable cotton cultivation. Items with this label contain at least 50% cotton, from a retailer or brand that is committed to Better Cotton and invests in BCI Farmers. This does not mean that the product is made from physically traceable Better Cotton.',
    },
    reviews: {
      one: 1,
      two: 3,
      three: 6,
      four: 13,
      five: 50,
    },
  },
]

module.exports = { products }
