const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: '未分类'
  },
  rawContentState: {
    type: String,
    required: true
  },
  createTime: {
    type: Date,
    default: Date.now
  },
  updateTime: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('note', noteSchema)