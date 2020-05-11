const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 25,
  secure: false,
  auth: {
    user: '2284565003@qq.com',
    pass: 'vhvxhdevozvxecgg'
  }
})

function send(mail, code) {
  const mailObj = {
    from: '"便签" <2284565003@qq.com>', 
    to: mail, 
    subject: '邮箱验证码，10分钟内有效', 
    text: `你的验证码是: ${code}，10分钟内有效` 
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailObj, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = { send }