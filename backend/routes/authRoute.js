const express = require('express');
const { createUser, loginUserCtrl, getallUser, getaUser,deleteaUser, updatedUser } = require('../controllers/userControl');
const router = express.Router();



// routing to user control
router.post('/register' ,createUser);
router.post('/login' ,loginUserCtrl);

//get all users 
router.get('/all_users',getallUser)

//get a user
router.get('/:id',getaUser)

//delete a user
router.delete('/:id',deleteaUser)

//update a user
router.put('/:id', updatedUser)






module.exports = router