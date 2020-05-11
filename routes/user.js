const router = require('express').Router()
const UserModel = require('../models/UserModel')
const Mail = require('../utils/mail')
const { ismail, randomCode } = require('../utils')
const md5 = require('blueimp-md5')
const jwt = require('jsonwebtoken')

router.get('/getcode', async (req, res) => {
  const { mail } = req.query
  if (!mail) return res.send({ err: 1, msg: '邮箱地址不能为空'})
  if (!ismail(mail)) return res.send({ err: 1, msg: '邮箱地址格式不正确'})

  try {
    const code = randomCode()
    await Mail.send(mail, code)
    const user = await UserModel.findOne({ mail })
    // 如果该邮箱已经注册过，更新 code, codeTime。否则重新创建
    const codeTime = Date.now()
    if (!user) {
      const userModel = new UserModel({ mail, code, codeTime})
      await userModel.save()
    } else {
      await UserModel.updateOne({ mail }, { code, codeTime })
    }
    res.send({ err: 0, msg: '验证码发送成功' })
  } catch (err) {
    console.log(err.response)
    return res.send({ err: 1, msg: '获取验证码失败, 请稍候再试'})
  }
})

router.post('/register', async (req, res) => {
  const { mail, password, code } = req.body 

  if (!mail || !password) return res.send({ err: 1, msg: '邮箱地址或密码不能为空' })    
  if (!code) return res.send({ err: 1, msg: '验证码不能为空' })    
  if (!ismail(mail)) return res.send({ err: 1, msg: '邮箱地址格式不正确'})
  if (password.length < 6) return res.send({ err: 1, msg: '密码长度不可少于6位'})

  const user = await UserModel.findOne({ mail })
  if (!user) return res.send({ err: 1, msg: '验证码不正确' })
  if (user.isLive) return res.send({ err: 1, msg: '该邮箱地址已经被注册了'})
  
  const nowTime = Date.now()
  if (user.code === code && nowTime - user.codeTime < 600000) {
    await UserModel.updateOne({ mail }, { password: md5(password), createTime: nowTime, isLive: true })
    res.send({ err: 0, msg: '注册成功' })
  } else {
    res.send({ err: 1, msg: '验证码不正确' })
  }

})

router.post('/login', async (req, res) => {
  const { mail, password } = req.body 

  if (!mail || !password) return res.send({ err: 1, msg: '用户名或密码不能为空' })
  if (!ismail(mail)) return res.send({ err: 1, msg: '邮箱地址格式不正确'})

  const user = await UserModel.findOneAndUpdate({ mail, password: md5(password), isLive: true }, { updateTime: Date.now()}, { useFindAndModify: false })
  if (!user) return res.send({ err: 1, msg: '用户名或密码不正确' })
  
  const token = jwt.sign({
    _id: user._id 
  }, process.env.SECRET, { expiresIn: '2h' });
  return res.send({ err: 0, data: token })
})

router.get('/getuser', (req, res) => {
  res.send(req.user._id)
})

router.post('/reset', async (req, res) => {
  const { mail, password, code } = req.body 
  
  if (!mail || !password) return res.send({ err: 1, msg: '邮箱地址或密码不能为空' })    
  if (!code) return res.send({ err: 1, msg: '验证码不能为空' })    
  if (!ismail(mail)) return res.send({ err: 1, msg: '邮箱地址格式不正确'})
  if (password.length < 6) return res.send({ err: 1, msg: '密码长度不可少于6位'})

  const user = await UserModel.findOne({ mail })
  if (!user) return res.send({ err: 1, msg: '验证码不正确' })
  if (!user.isLive) return res.send({ err: 1, msg: '该邮箱地址还没有注册'})
  
  const nowTime = Date.now()
  if (user.code === code && nowTime - user.codeTime < 600000) {
    await UserModel.updateOne({ mail }, { password: md5(password) })
    res.send({ err: 0, msg: '修改密码成功' })
  } else {
    res.send({ err: 1, msg: '验证码不正确' })
  }
})
module.exports = router 