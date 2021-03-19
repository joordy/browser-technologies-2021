const renderProfile = (req, res, next) => {
  try {
    console.log('Login page', req.body)
    res.render('createAccount', {
      PageTitle: 'Create account | PhotoPaint',
      orders: req.body,
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = renderProfile
