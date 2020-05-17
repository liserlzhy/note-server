const router = require('express').Router()
const NoteModel = require('../models/NoteModel')

router.post('/add', async (req, res) => {
  const { rawContentState, category } = req.body 
  if (!rawContentState || !category) return res.send({err: 1, msg: '缺少参数'})
  try {
    const noteModel = new NoteModel({
      rawContentState,
      userid: req.user._id,
      category 
    })
  
    const note = await noteModel.save()
    res.send({ err: 0, data: note._id })
  } catch(err) {
    console.log(err)
    res.status(500)
  }
})  

router.post('/update', async (req, res) => {
  const { _id, rawContentState } = req.body

  try {
    if (!_id || !rawContentState) return res.status(404).send('参数缺失')
  
    const note = await NoteModel.updateOne({ _id }, { rawContentState, updateTime: Date.now() })
    if (note.ok) {
      console.log(rawContentState)
      res.send({ err: 0, msg: '更新成功'})
    } else {
      res.status(404).send('更新失败')
    }
  } catch (err) {
    console.log(err)
    res.status(500)
  }
})

// 获取notes
router.get('/', async (req, res) => {
  let {_id, pageIndex, pageSize, keyword, category } = req.query
  let reg = ''
  let option = { userid: req.user._id }

  if (keyword) {
    reg = eval(`/"text":"[^"]*${keyword}[^"]*",/`)
    option = { ...option, rawContentState: { $regex: reg } }
  } 

  if (category) {
    option = {...option, category}
  }

  try {
    // 若是传了id值，返回该条数据，否则返回全部分页数据
    if (_id) {
      if (!/^[0-9a-z]{24}$/.test(_id)) return res.send({ err: 1, msg: 'id格式错误'})
      const note = await NoteModel.findOne({ _id })
      if (note) {
        return res.send({ err: 0, data: note.rawContentState })
      } else {
        return res.send({ err: 1, msg: '没有找到该条数据'})
      }
    }
    const count = await NoteModel.countDocuments(option)
    if (!pageIndex) pageIndex = 0
    if (!pageSize) pageSize = count 
    const notes = await NoteModel.find(option)
      .sort({ updateTime: -1 })
      .skip(pageIndex * pageSize)
      .limit(parseInt(pageSize))
    res.send({ err: 0, data: { count, notes } })
  } catch (err) {
    console.log(err)
    res.status(404).send('404')
  }
})

router.post('/delete', async (req, res) => {
  const { itemCheckedIds } = req.body
  if (!itemCheckedIds) return res.send({err: 1, msg: "缺失参数"})
  if (itemCheckedIds.length === 0) return res.send({err: 1, msg: "没有要删除的数据"})
  try {
    await NoteModel.deleteMany({ _id: { $in: itemCheckedIds } })
    res.send({ err: 0, msg: "删除成功" })
  } catch (err) {
    res.send({ err: 1, msg: '删除失败' })
    console.log(err)
  }
})

router.get('/getcategory', async (req, res) => {
  try {
    const category = await NoteModel.aggregate([
      {
        $match: {
          userid: req.user._id
        }
      },
      {
        $group: {
          _id: "$category", 
          count: {$sum: 1}
        }
      }
    ])
    if (category.length === 0) {
      return res.send({ err: 1, msg: '还没有分类信息' })
    }
    res.send({ err: 0, data: category })
  } catch (err) {
    console.log(err)
  }
})

router.post('/movecategory', async (req, res) => {
  const { itemCheckedIds, category } = req.body
  try {
    if (!itemCheckedIds || !category) return res.send({err: 1, msg: "缺失参数"})
    if (itemCheckedIds.length === 0) return res.send({err: 1, msg: "没有要移动的数据"})
    await NoteModel.updateMany({ _id: { $in: itemCheckedIds } }, { $set: { category } })
    res.send({ err: 0, msg: `已将所选的${itemCheckedIds.length}条便签移动到${category}`})
  } catch (err) {
    console.log(err)
  }
})
module.exports = router