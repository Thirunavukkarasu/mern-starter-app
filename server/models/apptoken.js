const mongoose = require('mongoose')

const appTokens = mongoose.Schema({
    name : String
  }, {
    collection: 'apptokens',
    timestamps: true
})

const model = mongoose.model('AppTokens', appTokens)

module.exports = model