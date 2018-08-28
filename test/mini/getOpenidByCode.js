var AngerWechat = require('../../index')
var path = require('path')

var weixinApi = new AngerWechat({
  appId: '',
  appSecret: '',
})

async function index() {
  
  let info = await weixinApi.Mini.getOpenidByCode({
    code: ''
  })
  
  
  console.log(info)
  
}


index()