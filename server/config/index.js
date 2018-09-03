const {merge} = require('lodash')

const env = process.env.NODE_ENV || 'development'

module.exports =  merge(
    require('./default'),
    require(`./${env}`)
)