const express = require('express');
const { createUser, loginUserCtrl, getallUser, getaUser,deleteaUser, updatedUser, blockUser, unblockUser } = require('../controllers/userControl');
const { authMiddleware, isAdmin} = require("../middlewares/authMiddleware")
const router = express.Router();



// routing to user control
router.post('/register' ,createUser);
router.post('/login' ,loginUserCtrl);

//get all users 
router.get('/all_users',getallUser)


//get a user
router.get('/:id', authMiddleware,isAdmin, getaUser)

//delete a user
router.delete('/:id',deleteaUser)

//update a user
router.put('/edit-user', authMiddleware, updatedUser)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)







module.exports = router