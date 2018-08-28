let angerWechat = require('./initwx')


async function index() {
  
  // get code info (openid and access_token)
  
  let codeInfo = await angerWechat.Web.getAuthAccessTokenByCode({
    code: '071lewkk2OuMyF0xKFhk2LMSkk2lewku'
  })
  console.log('codeInfo', codeInfo)

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
}


index()