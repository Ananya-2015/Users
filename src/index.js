const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./Connection/connection')
const usersRoutes = require('./routes/routes')
const {errorMiddleware} = require('./Error/errorMiddleware')

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use('/', (req, res, next) => {
    next()
})

app.use('/users', usersRoutes)

app.use(errorMiddleware)

connection.connection(() => app.listen(3000))



























