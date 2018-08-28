var AngerWechat = require('../../index')

var weixinApi = new AngerWechat({
  appId: 'wxf638c1f64239e786',
  appSecret: 'e10c0db08562640e0a9fffab940724c2',
  authUrl: 'http://www.toolos.cc/get-weixin-code.html'
})


module.exports = weixinApi