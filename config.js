const config = {
    appConfig: {
        port: process.env.APP_PORT
    },
    dbConfig: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dbName: process.env.DB_NAME
    },
    uriConfig: {
        uri: process.env.MONGODB_URI
    }
}

module.exports = config