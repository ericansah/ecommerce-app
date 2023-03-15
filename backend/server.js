const { $CombinedState } = require('@reduxjs/toolkit');
const app = require('./app')
const dbConnect = require('./config/dbConnect');
const dotenv = require("dotenv");


//setting up config
dotenv.config({path: 'backend/config/config.env'})

//connecting to database
dbConnect();



//server testing
app.listen(process.env.PORT, ()=> {
    console.log('Listening On port ', process.env.PORT)
});



 

