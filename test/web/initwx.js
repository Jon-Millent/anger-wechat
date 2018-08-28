var AngerWechat = require('../../index')

var weixinApi = new AngerWechat({
  appId: '',
  appSecret: '',
  authUrl: 'http://www.test.cc/get-weixin-code.html'
})


module.exports = weixinApi
