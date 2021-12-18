require('dotenv').config()
const app = require('./app')
const connectDb = require('./db/dbConfig')
const { appConfig, uriConfig } = require('./config')

async function initApp (appConfig, uriConfig) {
    try {
        await connectDb(uriConfig)
        app.listen(appConfig.port, ()=> console.log(`Server running on port ${appConfig.port}`));
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}

initApp(appConfig, uriConfig)
