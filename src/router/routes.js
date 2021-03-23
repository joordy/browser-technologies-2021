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
const postCreateProfile = require('../renders/postCreateProfile')
const postGetProfile = require('./../renders/postGetProfile')
const postToEditor = require('./../renders/postToEditor')
const postDeletedOrder = require('./../renders/postDeletedOrder')

// Setting get routes
router.get('/', renderHome)
router.get('/shop', renderShop)
router.get('/product/:id', renderProduct)
router.get('/cart', renderCart)
// router.get('/*', error)

// Setting post routes
router.post('/products/:id', urlencodedParser, postToEditor)
router.post('/cart', urlencodedParser, postShoppingCard)
router.post('/create-profile', urlencodedParser, postCreateProfile)
router.post('/login-profile', urlencodedParser, postGetProfile)
router.post('/profile/deleted-order', urlencodedParser, postDeletedOrder)

// Export router module
module.exports = router

// const renderProfile = require('./../renders/renderProfile')
// const error = require('./../renders/error')
// const postOrderSearch = require('../_trash/postOrderSearch')
// const postLogin = require('../renders/postLogin')
// router.get('/profile', renderProfile)
// router.post('/myCart', urlencodedParser, postOrderSearch)
// router.post('/account', urlencodedParser, createAccount)
// router.post('/profile', urlencodedParser, createAccount)
