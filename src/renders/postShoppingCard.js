const admin = require('../data/db')
const { checkColor } = require('../utils/filter.js')

const database = admin.database()
// const ofirebase = require('../firebase/setData.js')

// toCart route function
const postShoppingCard = async (req, res) => {
  try {
    console.log(req.body)
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

    database.ref('/orders/' + req.body.orderID).set({
      order,
    })

    res.render('cart', {
      PageTitle: 'Cart | ShirtDesigns',
      orders: order,
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = postShoppingCard
