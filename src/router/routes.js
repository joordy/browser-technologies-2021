// Import packages
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true })

// Import routes
const renderHome = require('./../renders/renderHome')
const renderShop = require('./../renders/renderShop')
const renderProduct = require('./../renders/renderProduct')
const renderCart = require('./../renders/renderCart')
const postShoppingCard = require('../renders/postShoppingCard')
const renderProfile = require('./../renders/renderProfile')
// const error = require('./../renders/error')
const postOrderSearch = require('./../renders/postOrderSearch')
const postLogin = require('../renders/postLogin')
const postCreateProfile = require('../renders/postCreateProfile')
const postGetProfile = require('./../renders/postGetProfile')

// Setting get routes
router.get('/', renderHome)
router.get('/shop', renderShop)
router.get('/product/:id', renderProduct)
router.get('/cart', renderCart)
router.get('/profile', renderProfile)
// router.get('/*', error)

// Setting post routes
router.post('/cart', urlencodedParser, postShoppingCard)
router.post('/myCart', urlencodedParser, postOrderSearch)
router.post('/login', urlencodedParser, postLogin)
router.post('/create-profile', urlencodedParser, postCreateProfile)
router.post('/login-profile', urlencodedParser, postGetProfile)
// router.post('/account', urlencodedParser, createAccount)
// router.post('/profile', urlencodedParser, createAccount)

// Export router module
module.exports = router
