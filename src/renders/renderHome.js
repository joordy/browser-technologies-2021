// Home route function
const renderHome = async (req, res) => {
  try {
    res.redirect('/shop')
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = renderHome
