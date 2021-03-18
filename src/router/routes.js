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
const { toCart } = require('./../renders/toCart')
const { profile } = require('./../renders/profile')
const { error } = require('./../renders/error')
const { searchOrder } = require('./../renders/searchOrder')

// Setting get routes
router.get('/', home)
router.get('/shop', shop)
router.get('/product/:id', product)
router.get('/cart', cart)
router.get('/profile', profile)
router.get('/*', error)

// Setting post routes
router.post('/cart', urlencodedParser, toCart)
router.post('/myCart', urlencodedParser, searchOrder)

// Export router module
module.exports = router
