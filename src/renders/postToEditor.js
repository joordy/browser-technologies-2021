const admin = require('../data/db')

const { checkColor } = require('../utils/filter.js')

const database = admin.database()
// const ofirebase = require('../firebase/setData.js')

// toCart route function
const postToEditor = async (req, res) => {
  try {
    // console.log(req.body)
    // console.log('hallo editor')

    // // database.ref('/orders/' + req.body.orderID).set({
    // //   order,
    // // })

    // res.render('editProduct', {
    //   PageTitle: 'Edit product | ShirtDesigns',
    // })

    database
      .ref(`/users/${req.body.customerID}`)
      .once('value')
      .then((snapshot) => {
        const data = snapshot.val()
        console.log('data', data)
        console.log('editable', req.body)
        res.render('editProduct', {
          PageTitle: 'Edit product | ShirtDesigns',
          placeholder: data[0],
        })
        // database.ref(`/users/${req.body.customerID}/allOrders/`).push(newItem)

        // if (data.allOrders === undefined) {
        //   res.render('profile', {
        //     PageTitle: `Hi ${data.firstname}  | ShirtDesigns`,
        //     customer: {
        //       id: data.customerID,
        //       firstname: data.firstname,
        //       lastname: data.lastname,
        //       email: data.email,
        //       photo: data.photo,
        //     },
        //   })
        // } else {
        //   const cleanedOrders = Object.keys(data.allOrders).map(
        //     (i) => data.allOrders[i]
        //   )

        //   res.render('profile', {
        //     PageTitle: `Hi ${data.firstname}  | ShirtDesigns`,
        //     customer: {
        //       id: data.customerID,
        //       firstname: data.firstname,
        //       lastname: data.lastname,
        //       email: data.email,
        //       photo: data.photo,
        //       orders: cleanedOrders,
        //     },
        //   })
        // }
        // console.log(req.body)
        // console.log('all elements', data.allOrders)
        // const tryout = data.allOrders
        // const testje = Object.keys(tryout).map((i) => tryout[i])
      })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = postToEditor
