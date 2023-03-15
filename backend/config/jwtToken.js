const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");



const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET, {expiresIn: "3d"})
}

//setting up config
dotenv.config({path: 'backend/config/config.env'})



module.exports = { generateToken};