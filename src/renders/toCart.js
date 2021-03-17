// toCart route function
const toCart = async (req, res) => {
  try {
    console.log(req.body)
    res.render('cart', {
      PageTitle: 'Cart | ShirtDesigns',
      orders: req.body,
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { toCart }
