// const uniqid = require('uniqid')
const e = require('express')
const admin = require('../data/db')
const database = admin.database()

// profile route function
const postGetProfile = async (req, res) => {
  try {
    if (req.body.orderID != undefined) {
      // When req.body is defined
      console.log('defined')
      console.log(req.body)
      database
        .ref(`/users/${req.body.customerID}`)
        .once('value')
        .then((snapshot) => {
          const data = snapshot.val()
          console.log('data')
          const newItem = {
            customerID: req.body.customerID,
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
          database.ref(`/users/${req.body.customerID}/allOrders/`).push(newItem)

          database
            .ref(`/users/${req.body.customerID}/allOrders/`)
            .once('value')
            .then((snapshot) => {
              const newOrderData = snapshot.val()
              const cleanedOrders = Object.keys(newOrderData).map(
                (i) => newOrderData[i]
              )
              res.render('profile', {
                PageTitle: `Hi ${data.firstname}  | ShirtDesigns`,
                customer: {
                  id: data.customerID,
                  firstname: data.firstname,
                  lastname: data.lastname,
                  email: data.email,
                  photo: data.photo,
                  orders: cleanedOrders,
                },
              })
            })
        })
    } else {
      // when req.body.orderid is undefined
      console.log(req.body.orderID)
      database
        .ref(`/users/${req.body.customerID}`)
        .once('value')
        .then((snapshot) => {
          const data = snapshot.val()

          if (data.allOrders != undefined) {
            // When there are already orders
            const cleanedOrders = Object.keys(data.allOrders).map(
              (i) => data.allOrders[i]
            )
            console.log('cleanedOrders', cleanedOrders)
            res.render('profile', {
              PageTitle: `Hi ${data.firstname}  | ShirtDesigns`,
              customer: {
                id: data.customerID,
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                photo: data.photo,
                orders: cleanedOrders,
              },
            })
          } else {
            // New orders
            res.render('profile', {
              PageTitle: `Hi ${data.firstname}  | ShirtDesigns`,
              customer: {
                id: data.customerID,
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                photo: data.photo,
              },
            })
          }
        })
    }
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = postGetProfile
