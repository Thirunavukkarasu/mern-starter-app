const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    google : {
        id: String,
        token: String,
        email: String,
        name: String,
        role: String
    },
    permissions: Array
}, { 
    collection: 'users',
    timestamps: true
})

const model = mongoose.model('User', schema)

module.exports = model