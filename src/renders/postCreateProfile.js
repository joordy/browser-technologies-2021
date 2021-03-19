const uniqid = require('uniqid')
const admin = require('../data/db')
const database = admin.database()

// profile route function
const postCreateProfile = async (req, res) => {
  try {
    const newID = uniqid('user_')
    const imageURL = {
      small: 'images/photo_of_me_small.png',
      normal: 'images/photo_of_me.png',
    }

    if (req.body.orderID === undefined) {
      console.log('Product is empty / not exist')

      database.ref(`/users/${newID}`).set({
        customerID: newID,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        photo: imageURL,
        allOrders: [],
      })
      res.render('profile', {
        PageTitle: 'Profile | ShirtDesigns',
        customer: {
          id: newID,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          photo: imageURL,
        },
      })
    } else {
      const order = {
        customerID: newID,
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
      }
      console.log('Product exist')
      console.log(order)

      database.ref(`/users/${newID}`).set({
        customerID: newID,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        photo: imageURL,
        allOrders: [order],
      })

      res.render('profile', {
        PageTitle: 'Profile | ShirtDesigns',
        customer: {
          id: newID,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          photo: imageURL,
          orders: [order],
        },
      })
    }
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = postCreateProfile
