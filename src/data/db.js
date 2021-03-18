let admin = require('firebase-admin')
let serviceAccount = require('./connect.json')
require('dotenv').config()

// const abc = process.env.PRIVATE_KEY
// let test = abc.replace(/\\n/g, '\n')
// console.log(test)
// // console.log(JSON.stringify(abc))
// // const test = JSON.stringify(abc)
// const settings = {
//   type: process.env.TYPE,
//   project_id: process.env.PROJECT_ID,
//   private_key_id: process.env.PRIVATE_KEY_ID,
//   // private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
//   private_key:
//   client_email: process.env.CLIENT_EMAIL,
//   client_id: process.env.CLIENT_ID,
//   auth_uri: process.env.AUTH_URI,
//   token_uri: process.env.TOKEN_URI,
//   auth_provider_x509_cert_url: process.env.PROVIDER,
//   client_x509_cert_url: process.env.CLIENT_CERT_URL,
// }

// // console.log(process.env.PRIVATE_KEY)
// console.log(settings)

// const serviceAccount = JSON.stringify(settings)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
})

module.exports = admin
