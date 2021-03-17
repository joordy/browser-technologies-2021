// Home route function
const product = async (req, res) => {
  try {
    res.render('product', {
      PageTitle: 'product | ShirtDesigns',
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { product }
