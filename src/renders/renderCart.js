// cart route function
const cart = async (req, res) => {
  try {
    // console.log(req.body)

    res.render('cart', {
      PageTitle: 'Cart | ShirtDesigns',
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = cart
