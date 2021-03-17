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
const { profile } = require('./../renders/profile')

// Setting get routes
router.get('/', home)
router.get('/shop', shop)
router.get('/product/:id', product)
router.get('/cart', cart)
router.get('/profile', profile)

// Setting post routes
router.post('/cart', cart)

// Export router module
module.exports = router
