const { products } = require('../data/products.js')

// shop route function
const renderShop = async (req, res) => {
  try {
    let data = products
    res.render('shop', {
      PageTitle: 'Shop | ShirtDesigns',
      products: data,
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = renderShop
