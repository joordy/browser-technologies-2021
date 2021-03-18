// const uniqid = require('uniqid')
const admin = require('../data/db')
const database = admin.database()

// profile route function
const postGetProfile = async (req, res) => {
  try {
    const newItem = req.body

    if (req.body.orderID !== undefined) {
      database
        .ref('users/' + req.body.customerID)
        .once('value')
        .then((snapshot) => {
          const data = snapshot.val()
          console.log(req.body.customerID)
          console.log(req.body)

          database.ref(`/users/${req.body.customerID}/allOrders`).push(newItem)

          res.render('profile', {
            PageTitle: 'Your orders | ShirtDesigns',
            customerID: req.body.customerID,
          })
        })
    } else {
      console.log('hi')
      res.render('profile', {
        PageTitle: 'Your orders | ShirtDesigns',
        customerID: req.body.customerID,
      })
    }
    // database.ref('/users/' + req.body.customerID).set({
    //   newItem,
    // })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = postGetProfile
