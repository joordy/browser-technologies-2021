// profile route function
const profile = async (req, res) => {
  try {
    res.render('profile', {
      PageTitle: 'Profile | ShirtDesigns',
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { profile }
