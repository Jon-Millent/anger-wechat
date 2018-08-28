let angerWechat = require('./initwx')


async function index() {
  
  
  let jsTrickt = await angerWechat.Web.getJsTicket({
    access_token: '13_4jwE3oGcpy1HtE-MS1lgYrfj6RqqK8sBg8nWcxCE1cpCo9Sv1sPNAdCE1xOs9TE3zIo_o7KQ-a_zccQdPbvh-kZZ2L5eaC3H42TTuQLMCJFOr8kDk_XPeYwFzILmR8TE5Iknv24P6Zy4FnshFNIhAJAOWR'
  })
  
  console.log(jsTrickt)
  /*
  { code: 200,
  msg: 'ok',
  data:
   { errcode: 0,
     errmsg: 'ok',
     ticket: 'HoagFKDcsGMVCIY2vOjf9oKOmI5MRTBgKJJwCDQ2BnyLbfAJHCZXUIs992xQP246Nzp7LCNupv5Jablw8COZ_w',
     expires_in: 7200 } }
  */
  // console.log(jsTrickt, 'jsTrickt')
  
}


index()