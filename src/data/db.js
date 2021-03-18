let admin = require('firebase-admin')
let serviceAccount = require('./connect.json')
require('dotenv').config()

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
})

module.exports = admin
