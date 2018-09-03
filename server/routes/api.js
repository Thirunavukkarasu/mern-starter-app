const express = require('express')
const frameworkRoutes = require("./framework")
const userRoutes = require("./user")

var apiRouter = express.Router()

module.exports = (app, passport) => apiRouter
    .use(frameworkRoutes())
    .use(userRoutes(passport))
