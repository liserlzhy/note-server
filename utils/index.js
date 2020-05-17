exports.ismail = (mail) => {
  let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  return reg.test(mail)
}

exports.randomCode = () => {
  let code = Math.floor(Math.random() * 8999 + 1000)
  return code
}

exports.formatTime = (timeStamp) => {
  let d = new Date(timeStamp)
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  let date = d.getDate()
  let h = d.getHours()
  let m = d.getMinutes()

  if (h < 10) {
    h = '0' + h
  }
  if (m < 10) {
    m = '0' + m
  }  
  return year + '/' + month + '/' + date  + ' ' + h + ':' + m
}
