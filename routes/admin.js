const router = require('express').Router()
const UserModel = require('../models/UserModel')
const NoteModel = require('../models/NoteModel')
const md5 = require('blueimp-md5')
const url = require('url')
const { formatTime } = require('../utils')

router.use((req, res, next) => {
  if (!req.session['admin_ID'] && req.url !== '/login') {
    res.redirect('/admin/login')
  } else {
    next()
  }
})

router.get('/', (req, res) => {
  res.redirect('/admin/users')
})
router.get('/login', (req, res) => {
  res.render('login', {error_msg: ''})
})

router.post('/login', (req, res) => {
  const { username, password } = req.body
  
  if (!username || !password) {
    showError('请填写数据')
  } else if (username !== process.env.ADMIN_USERNAME || md5(password) !== process.env.ADMIN_PASSWORD) {
    showError('用户名或密码不正确')
  } else {
    req.session['admin_ID'] = '1'
    res.redirect('/admin/users')
  }

  function showError(str) {
    res.render('login', {error_msg: str})
  }
})

router.get('/users', async (req, res) => {
  let { page } = req.query
  const  pageSize = 10

  if (!page) {
    page = 1
  } else if (!/^[1-9]\d*$/.test(page)) {
    page = 1
  }

  const count = await UserModel.countDocuments({isLive: true})
  const users = await UserModel.find({isLive: true}, {_id: 1, mail: 1, createTime: 1, updateTime: 1})
    .sort({ updateTime: -1 })
    .skip((page - 1) * pageSize)
    .limit(parseInt(pageSize))
    .lean()

  const noteNum = await NoteModel.aggregate([{$group : {_id : "$userid", num : {$sum : 1}}}])
  let newNoteNum = {}
  noteNum.forEach(item => newNoteNum[item._id] = item.num)
  let data = []
  if (users.length > 0) {
    data = users.map(user => {
      const item = {...user, num: newNoteNum[user._id] || 0}
      item.createTime = formatTime(item.createTime)
      item.updateTime = formatTime(item.updateTime)
      return item
    })
  }
  res.render('index', {
    users: data, curPage: page, showPageCount: 9, pageCount: Math.ceil(count / pageSize), curUrl: url.parse(req.url).pathname
  })
})

router.get('/garbage', async (req, res) => {
  const users = await UserModel.find({ isLive: false }, {_id: 1, codeTime: 1, mail: 1}).lean()
  users.map(user => {
    user.codeTime = formatTime(user.codeTime)
  })
  res.render('index', {
    users, curUrl: url.parse(req.url).pathname
  })
})

router.post('/garbage/delete', async (req, res) => {
  const checkedIds = req.body
  if (!checkedIds || checkedIds.length === 0) return res.send({ err: 1, msg: '参数缺失'})
  try {
    const result = await UserModel.deleteMany({ _id: { $in: checkedIds } })
    res.send({ err: 0, msg: '删除成功'})
  } catch (err) {
    console.log(err)
    res.send({ err: 1, msg: '删除失败'})
  }
})

router.get('*', (req, res) => {
  res.render('404')
})
module.exports = router