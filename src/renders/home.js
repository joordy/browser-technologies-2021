// Home route function
const home = async (req, res) => {
  try {
    res.redirect('/shop')
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { home }
