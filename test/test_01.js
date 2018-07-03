var AngerWechat = require('../index')

var weixinApi = new AngerWechat({
  appId: 'wxf638c1f64239e786',
  appSecret: 'e10c0db08562640e0a9fffab940724c2',
  authUrl: 'http://www.toolos.cc/get-weixin-code.html'
})

async function test() {
  
  // get Access Token

    let access_token = await weixinApi.getGlobalAccessToken()
    console.log(access_token)

    /*
    { code: 200,
    msg: '请求成功',
    data:
     { access_token: '11_oTBrYVsT9wqa_-q3WDNEBOtfz1XKdM7YKIcNBEiu29Wfh5yTnlqaj5W0hMuxZ7C9FlY7CxD0RjR35V1ik1M3Nyi5QENcgFKhh0gYoBnAXEQ2oV93sVtO7IRqhh1kd9QLG8fwyA3vFRdifpJCO
  VLgAGAVCS',
       expires_in: 7200 } }
    */
  
  
  // get auth code url
  /*
  let authURl = weixinApi.getAuthUrl({
    redirect_uri: 'http://www.baidu.com',
    scope: 'snsapi_userinfo'
  })
  console.log(authURl)
  // http://www.toolos.cc/get-weixin-code.html?appid=wxf638c1f64239e786&redirect_uri=http://www.baidu.com&scope=snsapi_userinfo&state=STATE
  */
  
  
  // get code info (openid and access_token)
  /*
  let codeInfo = await weixinApi.getAuthAccessTokenByCode({
    code: '061729xv1BtSAa09g8yv1hr0xv1729xB'
  })
  console.log('codeInfo', codeInfo)
  */
  /*
   { code: 200,
    msg: '请求成功',
    data:
    { access_token: '11_Vc7D8AoYURWoECzJgD6Q1ccUOOHypO6mU0RQF7BnliKKCY5arfVvl0h3PWURwpK7QFgPLfDkHLX-9Dif6BTntw',
      expires_in: 7200,
      refresh_token: '11_ii3uONcMPA-04RjuLlckMMiwaDGF2MjW2SB5vOI3Sshz39PAVn7kOyC80_pPmmRJxqbfJ3Rdw07WG154AeP83Q',
      openid: 'oI-Aa04T6FrpFFpTfyAaXR4SKacU',
      scope: 'snsapi_userinfo'
      }
    }
  */
  
  // get user info
  /*
  let userInfo = await weixinApi.getUserInfo({
    access_token: codeInfo.data.access_token,
    openid: codeInfo.data.openid
  })
  console.log('userInfo', userInfo)
  */
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
  
  
  /*
  let jsTrickt = await weixinApi.getJsTicket({
    access_token: '11_j3lYUtqL2y--qI0jmhxYloIiF7Bf_hjNJ8E0Je9iNvf6AgWVrbE2hY5dHRDqjeF8iwBQY3oklI9gEml6P9-6PO37x_gKAs3wicH8K76Boo23qyFO0lWt1zDr4uP1Ni22-03V8Fi9KNTEvi4xYSEhAAACWI'
  })
  */
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
  
  
  
  //
  // let jsTricktConfig = await weixinApi.getJsSdkConfig({
  //   ticket: 'HoagFKDcsGMVCIY2vOjf9oKOmI5MRTBgKJJwCDQ2BnyLbfAJHCZXUIs992xQP246Nzp7LCNupv5Jablw8COZ_w',
  //   url: 'http://www.toolos.cc'
  // })
  
  // console.log(jsTricktConfig)
}

test()