const mongoose= require("mongoose")
const dotenv = require("dotenv");
//setting up config
dotenv.config({path: 'backend/config/config.env'})

const dbConnect = () => {
    try{
         mongoose.connect(process.env.DB_LOCAL_URI)
        console.log("Database connected");
    }
    catch(error){
        console.log("failed to connect")

    }

    
}

module.exports = dbConnect

