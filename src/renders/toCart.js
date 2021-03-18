const { checkColor } = require('../utils/filter.js')

// toCart route function
const toCart = async (req, res) => {
  try {
    const order = {
      orderID: req.body.orderID,
      productID: req.body.productID,
      name: req.body.name,
      type: req.body.type,
      price: req.body.price,
      gender: req.body.gender,
      img: checkColor(req.body),
      color: req.body.color,
      print: req.body.print,
      size: req.body.size,
    }

    res.render('cart', {
      PageTitle: 'Cart | ShirtDesigns',
      orders: order,
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { toCart }
