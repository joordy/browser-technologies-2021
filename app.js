const express = require('express')
const app = express()
const path = require('path')
const expressHandlebars = require('express-handlebars')
const router = require('./src/router/routes')
const templates = path.join(__dirname, 'src/views')
const port = process.env.PORT || 1010

const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, './src/views/layouts'),
  partialsDir: './src/views/partials',
  extname: '.hbs',
  helpers: {
    listen: (input) => {
      return console.log(input)
    },
  },
})

app
  .engine('.hbs', hbs.engine)
  .set('view engine', '.hbs')
  .set('views', templates)
  .use(express.static('static'))
  .use(router)

// Launch application
app.listen(port, function () {
  console.log(`App can be opened on https://localhost:${port}`)
})
