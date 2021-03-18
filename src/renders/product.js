const uniqid = require('uniqid')
const { products } = require('../data/products.js')
const { filterByValue } = require('../utils/filter.js')

// product route function
const product = async (req, res) => {
  try {
    const id = req.url.replace('/product/', '')
    const data = filterByValue(products, id)
    const uniqueID = uniqid()
    // console.log(data[0])

    console.log(data[0])
    res.render('product', {
      PageTitle: 'product | ShirtDesigns',
      product: data[0],
      uniqueID: uniqueID,
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { product }
