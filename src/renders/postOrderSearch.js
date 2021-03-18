const admin = require('../data/db')
const database = admin.database()

// toCart route function
const postOrderSearch = async (req, res) => {
  try {
    database
      .ref('orders/' + req.body.searchID)
      .once('value')
      .then((snapshot) => {
        const data = snapshot.val()
        console.log('Searched order:', data.order)
        res.render('cart', {
          PageTitle: 'Your orders | ShirtDesigns',
          searchedOrder: data.order,
        })
      })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = postOrderSearch
