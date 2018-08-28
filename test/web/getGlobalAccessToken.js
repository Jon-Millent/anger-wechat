let angerWechat = require('./initwx')


async function index() {
  
  // get Access Token
  
  let access_token = await angerWechat.getGlobalAccessToken()
  console.log(access_token)
  
  /*
  { code: 200,
  msg: '请求成功',
  data:
   { access_token: '13_4jwE3oGcpy1HtE-MS1lgYrfj6RqqK8sBg8nWcxCE1cpCo9Sv1sPNAdCE1xOs9TE3zIo_o7KQ-a_zccQdPbvh-kZZ2L5eaC3H42TTuQLMCJFOr8kDk_XPeYwFzILmR8TE5Iknv24P6Zy4FnshFNIhAJAOWR',
     expires_in: 7200 } }
  */

}


index()