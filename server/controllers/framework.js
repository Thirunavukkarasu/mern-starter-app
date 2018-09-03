const bunyan = require('bunyan')

const logger = bunyan.createLogger({
    name        : 'Framework controller',
    env         : process.env.NODE_ENV,
    serializers : bunyan.stdSerializers,
    src         : true
})

const listFramework = async (req, res) => {
    logger.info({method:'listFramework' },'List Framework')
    res.json([{
        name : 'React'
    },{
        name : 'Angular'
    }])
}


module.exports = {
    listFramework
}