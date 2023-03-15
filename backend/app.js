const bodyParser = require('body-parser');
const express  = require('express');
const { errorHandler, notFound } = require('./middlewares/errorhandler');
const app = express();
app.use(express.json());
const authRouter = require('./routes/authRoute')




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))






//routing to to register  user to database and logging a user
app.use('', authRouter)

// routing error handling
app.use('', notFound);
app.use('',errorHandler)



module.exports = app