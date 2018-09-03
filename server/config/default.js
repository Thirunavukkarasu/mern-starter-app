const production = process.env.NODE_ENV === 'production'

const host = process.env.HOST_NAME || 'localhost'
const port = process.env.PORT || 6000

module.exports = {
    host,
    port,
    db : 'mongodb://localhost:27017/mern-app',
    googleOAuth : {
        clientId : '',
        clientSecret : '',
        callbackUrl : 'http://localhost/api/auth/google/callback'
    }
}