//PVtCRAz5ylarSuhd
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
let db

exports.connection = (callback) => {
    MongoClient.connect('mongodb+srv://ananya:PVtCRAz5ylarSuhd@cluster0.shzdx.mongodb.net/users?retryWrites=true&w=majority')
    .then((client) => {
        console.log('Database Connected')
        db = client.db()
        callback()
        
    }).
    catch(err => {
        console.log(err)
    })

}

exports.getdb = () => {
    if (db){
        return db
    }
    else{
        throw 'No database found'
    }
}






