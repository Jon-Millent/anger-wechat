let angerWechat = require('./initwx')


async function index() {
  
  // get auth code url
  
  let authURl = angerWechat.Web.getAuthUrl({
    redirect_uri: 'http://www.baidu.com',
    scope: 'snsapi_userinfo'
  })
  console.log(authURl)
  
  // http://www.toolos.cc/get-weixin-code.html?appid=wxf638c1f64239e786&redirect_uri=http://www.baidu.com&scope=snsapi_userinfo&state=STATE
  
}


index()