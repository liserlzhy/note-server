const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  mail: String,
  password: String,
  code: String,
  codeTime: Number,
  isLive: {
    type: Boolean,
    default: false 
  },
  createTime: Number,
  updateTime: Number
})

module.exports = mongoose.model('user', userSchema)