const express = require('express')
const userRouter = require('./routes/user')
const noteRoute = require('./routes/note')
const adminRoute = require('./routes/admin')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

// 数据库连接
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('数据库连接成功'))
  .catch(err => console.log('数据库连接失败: ', err))

// 静态目录
app.use(express.static(path.join(__dirname, 'public')))

// 后台模板
app.engine('art', require('express-art-template'))
app.set('view engine', 'art')
app.set('view options', {
  debug: process.env.NODE_ENV !== 'production'
})

// session 
app.use(session({
  secret: 'dsfLlsldlxcvewprppppcgs;;dfsc',
  cookie: { maxAge: 20 * 60 * 1000 }, 
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: true, 
  saveUninitialized: true 
}))

// body解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// jwt
app.use('/user', expressJwt({
  secret: process.env.SECRET 
}).unless({
  path: ['/user/login', '/user/register', '/user/getcode', '/user/reset']
}), userRouter)

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {   
    res.status(401).send('invalid token')
  }
})

// 路由配置
app.use('/note', expressJwt({ secret: process.env.SECRET }), noteRoute)
app.use('/admin', adminRoute)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, console.log(`http://localhost:${PORT}`))