const { json } = require('express/lib/response')
const { ObjectId } = require('mongodb')
const userService = require('../User Services/userServices')

exports.getAllUsers = async(req, res, next) => {
    try{
        const allUsers = await userService.getAllUsers()
        res.json({message:allUsers})
    }
    catch(err){
        next(err)
    }
   
}
exports.getUser = async(req, res, next) => {
    try {
        const id = ObjectId(req.query.id)
        const user = await userService.getUser(id)
        res.json({message : user})
    }
    catch(err) {
        next(err)
    }
    
    
}
exports.postUser =  async (req, res, next) => {
    try {
        const newUser = await userService.postUser(req.query.name, req.query.age)
        res.json({
            message: 'Posted One User',
            body: {
                _id : newUser.insertedId,
            }
        
        })

    }
    catch(err){
        next(err)
    } 

}

exports.updateUser = async(req, res, next) =>{
    try{
        await userService.updateUser(ObjectId(req.params._id) ,req.query)
        res.json({
            message:'Updated one user',
            body : req.query
        })
    }
    catch(err){
        next(err)
    }
}

exports.deleteUser = async(req, res, next) => {
    try{
        const user = await userService.deleteUser(ObjectId(req.params._id))
        res.json({
            message : 'Deleted One User',
            body : user
        })
    }
    catch(err) {
        next(err)
    }
}
