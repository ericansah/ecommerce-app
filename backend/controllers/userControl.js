const User= require('../models/userModel')
const asyncHandler = require ('express-async-handler');
const { generateToken } = require('../config/jwtToken');
const validMongoDbId = require('../utils/validateMongodbId')



const createUser = asyncHandler( async (req, res,) => {
    const email = req.body.email;
    const findUser = await User.findOne({email: email});
    if (!findUser){
        //create a new user
        const newUser = await User.create(req.body);
        res.json(newUser)
    }
    else{
        //user already exist
        throw new Error ('User Already Exited')
        
        
    }

});

//logging a user
const loginUserCtrl = asyncHandler(async (req, res) =>{
    const {email, password} = req.body;

    //check if user exist or not
    const findUser = await User.findOne({email});
    if (findUser && await findUser.isPasswordMatched(password)){
     res.json({
        id: findUser?.id,
        firstname: findUser?.firstname,
        lastname: findUser?.lasttname,
        email: findUser?.email,
        mobile: findUser?.mobile,
        token: generateToken(findUser?._id),
     });

    }else{
        throw new Error("Invalid credential");
    }
    
});

// update a user

const updatedUser = asyncHandler(async(req, res) =>{
    const {id}  = req.user;
    validateMongoDbId(id);
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        },
        {
            new: true,
        }
        );
        res.json(updatedUser
        )
     } catch (error) {
        throw new Error(error);
     }
    
})

// Get all users
const getallUser = asyncHandler (async (req ,res ) =>{
 try {
    const getUsers = await User.find();
    res.json(getUsers)
    
 } catch (error) {
    throw new Error(error);
 }
});

// get a single user
const getaUser = asyncHandler (async (req ,res ) =>{
    const {id}  = req.params;
    validateMongoDbId(id);
    try {
        const getaUser = await User.findById(id);
        res.json({
            getaUser,
        })
        
     } catch (error) {
        throw new Error(error);
     }
   });

// delete a user
const deleteaUser = asyncHandler (async (req ,res ) =>{
    const {id}  = req.params;
    validateMongoDbId(id);
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json({
            deleteaUser,
        })
        
     } catch (error) {
        throw new Error(error);
     }
   });

const blockUser = asyncHandler(async(req, res )=>{
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const block= await User.findByIdAndUpdate(id, {isBlocked:true},
          {
            new: true,
          }  )

    }catch(error){
        throw new Error(error)
     
    };
    // blocking a user and unblocking them
    res.json({
        message: " User is Blocked"
    });
});

const unblockUser = asyncHandler(async(req, res )=>{
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const unblock= await User.findByIdAndUpdate(id, 
            {isBlocked:false},
          {
            new: true,
          }  )

    }catch(error){
        throw new Error(error)
    };
    res.json({
        message: " User has been Unblocked"
    });

})




module.exports = {createUser, loginUserCtrl, getallUser, getaUser, deleteaUser,updatedUser, blockUser, unblockUser}