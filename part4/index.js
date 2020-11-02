const http = require('http')
const logger =require('./utils/logger.js')
const config=require('./utils/config.js');
const app = require('./app.js');

const server=http.createServer(app);
const PORT = config.PORT
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})