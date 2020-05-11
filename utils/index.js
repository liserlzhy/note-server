exports.ismail = (mail) => {
  let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  return reg.test(mail)
}

exports.randomCode = () => {
  let code = Math.floor(Math.random() * 8999 + 1000)
  return code
}