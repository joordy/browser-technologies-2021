// Import packages
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true })

// Import routes
const { home } = require('./../renders/home')
const { shop } = require('./../renders/shop')
const { product } = require('./../renders/product')
const { cart } = require('./../renders/cart')

// Setting get routes
router.get('/', home)
router.get('/shop', shop)
router.get('/product/:id', product)
router.get('/cart', cart)

// Setting post routes
router.post('/cart', cart)

// Export router module
module.exports = router
