const app = require('express')()
const userRouter = require('./routes/user')
const noteRoute = require('./routes/note')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000 
const expressJwt = require('express-jwt')
require('dotenv').config()

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('db is running ...'))
  .catch(err => console.log('数据库连接失败: ', err))
   
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(expressJwt({
  secret: process.env.SECRET 
}).unless({
  path: ['/user/login', '/user/register', '/user/getcode', '/user/reset']
}))
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {   
    res.status(401).send('invalid token')
  }
})

app.use('/user', userRouter).use('/note', noteRoute)

app.listen(process.env.PORT)