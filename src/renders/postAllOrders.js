const admin = require('../data/db')
const database = admin.database()

const postAllOrders = async (req, res) => {
  try {
    // console.log(req.body)
    database
      .ref(`/users/${req.body.customerID}`)
      .once('value')
      .then((snapshot) => {
        const data = snapshot.val()
        const cleanedOrders = Object.keys(data.allOrders).map(
          (i) => data.allOrders[i]
        )
        console.log(cleanedOrders.length)
        res.render('orderSuccessfull', {
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
  } catch (err) {
    console.log(err)
  }
}

module.exports = postAllOrders
