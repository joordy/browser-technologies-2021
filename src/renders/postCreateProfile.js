const uniqid = require('uniqid')
const admin = require('../data/db')
const database = admin.database()

// profile route function
const postCreateProfile = async (req, res) => {
  try {
    const newID = uniqid('user_')

    if (req.body !== undefined) {
      console.log('bestaat')
      database.ref(`/users/${newID}`).set({
        customerID: newID,
        allOrders: [
          {
            orderID: req.body.orderID,
            productID: req.body.productID,
            name: req.body.name,
            type: req.body.type,
            price: req.body.price,
            gender: req.body.gender,
            img: req.body.img,
            color: req.body.color,
            print: req.body.print,
            size: req.body.size,
          },
        ],
      })
    } else {
      console.log('empty')
      database.ref(`/users/${newID}`).set({
        customerID: newID,
        allOrders: [],
      })
    }

    res.render('profile', {
      PageTitle: 'Profile | ShirtDesigns',
      customerID: newID,
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = postCreateProfile
