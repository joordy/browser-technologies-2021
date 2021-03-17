const error = async (req, res) => {
  try {
    res.render('error', {
      PageTitle: 'Page Not Found | PhotoPaint',
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { error }
