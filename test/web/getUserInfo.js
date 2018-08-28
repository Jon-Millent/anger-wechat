let angerWechat = require('./initwx')


async function index() {
  
  
  // get user info
  
  let userInfo = await angerWechat.Web.getUserInfo({
    access_token: '13_Lb9O4XGJbRctE_IRYHJRTG2AYe-2_lnE7z4mrU8IWoJFzpyp49Dmwc9Iunrm1QcNQsMaQvifCPa6fP-hZi-frw',
    openid: 'oI-Aa04T6FrpFFpTfyAaXR4SKacU'
  })
  console.log('userInfo', userInfo)
  
  /*
  { code: 200,
  msg: '请求成功',
  data:
   { openid: 'oI-Aa04T6FrpFFpTfyAaXR4SKacU',
     nickname: '吃鱼的帆',
     sex: 1,
     language: 'zh_CN',
     city: '**',
     province: '**',
     country: '中国',
     headimgurl: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIS3x9dFdptD1s2ZZMTDCriaiaXiaDPtyZw3vfMmJLyQ8PU8laBv4MNnJh5c9QWtTQey0m4FYUPVEvAQ/132',
     privilege: [] } }
  */
  
}


index()