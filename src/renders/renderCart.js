// cart route function
const cart = async (req, res) => {
  try {
    res.render('cart', {
      PageTitle: 'Cart | ShirtDesigns',
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = cart
