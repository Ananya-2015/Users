const getdb = require('../Connection/connection')

exports.getAllUsers = async() => {
    const db = getdb.getdb()
    allUsers = await db.collection('users').find({}).toArray()
    if(allUsers.length !== 0) {
        return allUsers
    }
    throw new Error('Could not fetch all Users, try again later!')

}

exports.getUser = async(id) => {
    const db = getdb.getdb()
    const user = await db.collection('users').find({_id : id}).toArray()
   
    if(user.length !== 0){
        return user
    }
    throw new Error('Could not find the user')
    
}

exports.postUser =  async(name, age, books) => {
    const db = getdb.getdb()
    const newUser = await db.collection('users').insertOne({name: name, age : age, books : books})
    if (newUser.acknowledged){
        return newUser

    }
    throw new Error('Could not add user')

}

exports.updateUser = async(id, query) => {
    const db = getdb.getdb()
    // console.log(query)
    const user = await db.collection('users').updateOne({_id : id}, {$set : query})
    // console.log(user)
    if(user.modifiedCount){
        return user
    }
    throw new Error('Could not update user')

}

exports.deleteUser = async(id) => {
    const db = getdb.getdb()
    const user = await db.collection('users').deleteOne({_id : id})
    // console.log(user)
    if(user.deletedCount !== 0) {
        return user
    }
    throw new Error('Could not delete')

}