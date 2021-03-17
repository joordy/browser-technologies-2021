const express = require('express'),
  app = express(),
  path = require('path'),
  expressHandlebars = require('express-handlebars'),
  router = require('./src/router/routes'),
  templates = path.join(__dirname, 'src/views'),
  port = process.env.PORT || 1010,
  hbs = expressHandlebars.create({
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
  console.log(`App can be opened on http://localhost:${port}`)
})
