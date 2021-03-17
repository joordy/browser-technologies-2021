// Home route function
const shop = async (req, res) => {
  try {
    res.render('shop', {
      PageTitle: 'Shop | ShirtDesigns',
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { shop }
