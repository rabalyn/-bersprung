import debug from 'debug'
const loginfo = debug('app:info')
const logerror = debug('app:error')
const logdebug = debug('app:debug')

import fs from 'fs'
import path from 'path'

import config from './config'

import express from 'express'
import exphbs from 'express-handlebars'
const port = process.env.PORT || config.app.port || 9876
const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  partialsDir: [
    'views/partials/'
  ],
  extname: '.hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  loginfo('Listening on port %d', port)
})

