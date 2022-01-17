const express = require('express')
const router = express.Router()
userController = require('../User Controller/userController')

router.get('/getallusers', userController.getAllUsers)
router.get('/getuser',userController.getUser)
router.post('/postuser', userController.postUser)
router.put('/updateuser/:_id', userController.updateUser)
router.delete('/deleteuser/:_id', userController.deleteUser)

module.exports = router