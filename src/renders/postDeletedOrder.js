// const uniqid = require('uniqid')
const admin = require('../data/db')
const database = admin.database()

// profile route function
const postDeletedOrder = async (req, res) => {
  try {
    // console.log('deleted path')
    console.log(req.body)
    res.redirect('/login-profile')

    database
      .ref(`/users/${req.body.customerID}`)
      .once('value')
      .then((snapshot) => {
        const data = snapshot.val()
        console.log('data(', Object.values(data.allOrders))
        // const cleanedOrders = Object.keys(data.allOrders).map(
        //   (i) => data.allOrders[i]
        // )
        // console.log('deleted data page', cleanedOrders)
        console.log(data.allOrders)
        const specific = data.allOrders.filter((order) => {
          return order.orderID == req.body.orderID
        })
        // console.log('specific', specific)
        const specificOne = specific[0]
        console.log('specificOne', specific)
        database
          .ref(`/users/${req.body.customerID}/allOrders/`)
          .child(specificOne)
          .remove()
        // .orderByChild('orderID')
        // .equalTo(specificID)
        // .remove()
        // .on('child_added', (snap) => {
        //   console.log('specific one', snap.val())
        //   snap.val().delete()
        // })
      })
    // const newID = uniqid('user_')
    // const imageURL = {
    //   small: 'images/photo_of_me_small.png',
    //   normal: 'images/photo_of_me.png',
    // }
    // if (req.body.orderID === undefined) {
    //   console.log('Product is empty / not exist')
    //   database.ref(`/users/${newID}`).set({
    //     customerID: newID,
    //     firstname: req.body.firstname,
    //     lastname: req.body.lastname,
    //     email: req.body.email,
    //     photo: imageURL,
    //     allOrders: [],
    //   })
    //   res.render('profile', {
    //     PageTitle: 'Profile | ShirtDesigns',
    //     customer: {
    //       id: newID,
    //       firstname: req.body.firstname,
    //       lastname: req.body.lastname,
    //       email: req.body.email,
    //       photo: imageURL,
    //     },
    //   })
    // } else {
    //   const order = {
    //     customerID: newID,
    //     orderID: req.body.orderID,
    //     productID: req.body.productID,
    //     name: req.body.name,
    //     type: req.body.type,
    //     price: req.body.price,
    //     gender: req.body.gender,
    //     img: req.body.img,
    //     color: req.body.color,
    //     print: req.body.print,
    //     size: req.body.size,
    //   }
    //   console.log('Product exist')
    //   console.log(order)
    //   database.ref(`/users/${newID}`).set({
    //     customerID: newID,
    //     firstname: req.body.firstname,
    //     lastname: req.body.lastname,
    //     email: req.body.email,
    //     photo: imageURL,
    //     allOrders: [order],
    //   })
    //   res.render('profile', {
    //     PageTitle: 'Profile | ShirtDesigns',
    //     customer: {
    //       id: newID,
    //       firstname: req.body.firstname,
    //       lastname: req.body.lastname,
    //       email: req.body.email,
    //       photo: imageURL,
    //       orders: [order],
    //     },
    //   })
    // }
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = postDeletedOrder
