// const uniqid = require('uniqid')
const admin = require('../data/db')
const database = admin.database()

// profile route function
const postGetProfile = async (req, res) => {
  try {
    const newItem = req.body

    if (req.body.orderID === '') {
      database
        .ref(`/users/${req.body.customerID}`)
        .once('value')
        .then((snapshot) => {
          const data = snapshot.val()
          console.log('empty')
          console.log(data)
          res.render('profile', {
            PageTitle: `Hi ${data.firstname}  | ShirtDesigns`,
            customer: {
              id: data.customerID,
              firstname: data.firstname,
              lastname: data.lastname,
              email: data.email,
              photo: data.photo,
              orders: data.allOrders,
            },
          })
        })
    } else {
      database
        .ref(`/users/${req.body.customerID}`)
        .once('value')
        .then((snapshot) => {
          const data = snapshot.val()
          console.log('full')
          console.log(data)
          database.ref(`/users/${req.body.customerID}/allOrders`).push(newItem)
          res.render('profile', {
            PageTitle: `Hi ${data.firstname}  | ShirtDesigns`,
            customer: {
              id: data.customerID,
              firstname: data.firstname,
              lastname: data.lastname,
              email: data.email,
              photo: data.photo,
              orders: data.allOrders,
            },
          })
        })
    }
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = postGetProfile
