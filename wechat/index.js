module.exports = {

  weixinApi: {
  
    api: {
      // api access token
      accessToken: {
        helpMsg: 'access_token是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用access_token。开发者需要进行妥善保存。access_token的存储至少要保留512个字符空间。access_token的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的access_token失效。',
        helpUrl: 'https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140183',
        url: 'https://api.weixin.qq.com/cgi-bin/token',
        method: 'get'
      },
  
      // jsTicket
      jsTicket: {
        helpMsg: 'jssdk',
        helpUrl: 'https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115',
        url: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
        method: 'get'
      }
    },
    
    web: {
      // web access token
      accessToken: {
        helpMsg: '无限制调用次数，通过此接口可以获取到临时access_token和openid，推荐access_token放到session里面',
        helpUrl: 'https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842',
        url: 'https://api.weixin.qq.com/sns/oauth2/access_token',
        method: 'get'
      },
  
  
      // web user info
      userInfo: {
        helpMsg: '如果网页授权作用域为snsapi_userinfo，则此时开发者可以通过access_token和openid拉取用户信息了',
        helpUrl: 'https://mp.weixin.qq.com/wiki?action=doc&id=mp1421140842&t=0.4622491167403',
        url: 'https://api.weixin.qq.com/sns/userinfo',
        method: 'get'
      },
      
      
      
    }
    
    
    
    
  }

}