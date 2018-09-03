const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const apiRoutes = require('./routes/api')
const setupPassport = require('./setup/passport')
const config = require('./config')

process.on('uncaughtException', err => console.error(err))
process.on('unhandledRejection', err => console.error(err))
mongoose.Promise = global.Promise
mongoose.connect(config.db)
const db = mongoose.connection

db.on('error', function(err) {
  console.error('Mongoose error', err)
})

db.once('open', function() {
    console.log("Connected To", config.db)

    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json({ limit: '10mb' }))

    // CookieParser should be above session
    app.use(cookieParser())
    // Express MongoDB session storage
    // required for passport
    app.use(session({
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
      resave: true,
      rolling: true,
      secret: 'sessionsecret'
    }))

    // use passport session
    app.use(passport.initialize())
    app.use(passport.session())

    app.use("/api", apiRoutes(app, passport))

    // Setting the static folder
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'local'){
      app.use(express.static(path.resolve('./build')))
      app.use(function(req, res) {
        res.sendFile(path.resolve('./build/index.html'))
      })
    }

    setupPassport(passport)

    app.listen(config.port, (err) => {
      if (err) throw err
      console.log("Server listen on port ", config.port)
    })
})
