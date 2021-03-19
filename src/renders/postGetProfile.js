// const uniqid = require('uniqid')
const e = require('express')
const admin = require('../data/db')
const database = admin.database()

// profile route function
const postGetProfile = async (req, res) => {
  try {
    const newItem = {
      customer: data.customerID,
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

    if (req.body.orderID === undefined) {
      console.log('dit is een test')
      database
        .ref(`/users/${req.body.customerID}`)
        .once('value')
        .then((snapshot) => {
          const data = snapshot.val()
          if (data.allOrders === undefined) {
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
          } else {
            const cleanedOrders = Object.keys(data.allOrders).map(
              (i) => data.allOrders[i]
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
          }
          console.log(data)
        })
    } else {
      // console.log(req.body.orderID)
      console.log('dit is een nieuw product')
      database
        .ref(`/users/${req.body.customerID}`)
        .once('value')
        .then((snapshot) => {
          const data = snapshot.val()
          database.ref(`/users/${req.body.customerID}/allOrders/`).push(newItem)

          if (data.allOrders === undefined) {
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
          } else {
            const cleanedOrders = Object.keys(data.allOrders).map(
              (i) => data.allOrders[i]
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
          }
          // console.log(req.body)
          // console.log('all elements', data.allOrders)
          // const tryout = data.allOrders
          // const testje = Object.keys(tryout).map((i) => tryout[i])
        })
    }
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = postGetProfile

// if (req.body.orderID === '') {
//   database
//     .ref(`/users/${req.body.customerID}`)
//     .once('value')
//     .then((snapshot) => {
//       const data = snapshot.val()
//       console.log('empty')
//       console.log(data)
//       res.render('profile', {
//         PageTitle: `Hi ${data.firstname}  | ShirtDesigns`,
//         customer: {
//           id: data.customerID,
//           firstname: data.firstname,
//           lastname: data.lastname,
//           email: data.email,
//           photo: data.photo,
//           orders: data.allOrders,
//         },
//       })
//     })
// } else if (req.body.orderID === undefined) {
//   console.log(req.body.orderID)
//   console.log('dit is een test')
//   database
//     .ref(`/users/${req.body.customerID}`)
//     .once('value')
//     .then((snapshot) => {
//       const data = snapshot.val()
//       console.log('full')
//       console.log(data)
//       res.render('profile', {
//         PageTitle: `Hi ${data.firstname}  | ShirtDesigns`,
//         customer: {
//           id: data.customerID,
//           firstname: data.firstname,
//           lastname: data.lastname,
//           email: data.email,
//           photo: data.photo,
//           orders: data.allOrders,
//         },
//       })
//     })
// } else {
//   console.log(req.body.orderID)
//   console.log('dit is een nieuw product')
//   database
//     .ref(`/users/${req.body.customerID}`)
//     .once('value')
//     .then((snapshot) => {
//       const data = snapshot.val()
//       database.ref(`/users/${req.body.customerID}/allOrders`).push(newItem)
//       res.render('profile', {
//         PageTitle: `Hi ${data.firstname}  | ShirtDesigns`,
//         customer: {
//           id: data.customerID,
//           firstname: data.firstname,
//           lastname: data.lastname,
//           email: data.email,
//           photo: data.photo,
//           orders: data.allOrders,
//         },
//       })
//     })
// }
