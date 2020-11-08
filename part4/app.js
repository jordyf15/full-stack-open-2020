const logger=require('./utils/logger.js');
const config=require('./utils/config.js');
const mongoose=require('mongoose');
const cors=require('cors');
const express=require('express');
const app=express();
const loginRouter=require('./controllers/login');
const blogRouter=require('./controllers/blogs.js');
const testingRouter=require('./controllers/testing');
const userRouter=require('./controllers/users');
const middleware=require('./utils/middleware');

let MONGODB_URI=config.MONGODB_URI;
if(process.env.NODE_ENV==='test'){
    MONGODB_URI=config.TEST_MONGODB_URI
}

logger.info(`connecting to : ${MONGODB_URI}`);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(()=>{
    logger.info('connected to mongoDB')
})
.catch(()=>{
    logger.info('failed to to connect to MongoDB');
})

app.use(cors())
app.use(express.json())
app.use(middleware.tokenExtractor)
app.use('/api/login',loginRouter)
app.use('/api/blogs',blogRouter)
app.use('/api/users',userRouter)
if(process.env.NODE_ENV==='test'){
    app.use('/api/testing',testingRouter);
}
app.use(middleware.errorHandlerMiddleware)

module.exports=app;