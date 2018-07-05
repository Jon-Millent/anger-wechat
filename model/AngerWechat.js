const $util = require('../util')
const AngerPay = require('../lib/anger-pay')

class AngerWechat{
  
  constructor(config){
    this.appId = config.appId
    this.appSecret = config.appSecret
    this.authUrl = config.authUrl
    
    this.jsSdk = new $util.GetJsSdk()
    
    this.$api = new $util.PostMan({
      appId: this.appId,
      appSecret: this.appSecret
    })

    if(config.payment){
      this.angerPay = new AngerPay(config)
    }

  }
  
  // 是否是微信环境
  isWechat(request){
    let ua = request.headers["user-agent"].toLowerCase();
    return ua.match(/MicroMessenger/i)=="micromessenger";
    //如果是微信浏览器返回true 否则返回false
  }
  
  
  // 获取API ACCESS_TOKEN
  async getGlobalAccessToken(){
    return await this.$api.getGlobalAccessToken()
  }
  
  
  // 获取回调auth页面的url
  getAuthUrl(input){
    return $util.tool.concatUrlAndData(this.authUrl, {
      appid: this.appId,
      redirect_uri: input.redirect_uri,
      scope: input.scope || 'snsapi_base',
      state: 'STATE'
    })
  }
  
  
  // 网页 access_token code
  async getAuthAccessTokenByCode(input){
    return await this.$api.getAuthAccessTokenByCode({
      code: input.code
    })
  }
  
  // 获取用户信息
  async getUserInfo(input){
    return await this.$api.getUserInfo({
      access_token: input.access_token,
      lang: input.lang || 'zh_CN',
      openid: input.openid
    })
  }
  
  
  async getJsTicket(input){
    return await this.$api.getJsTicket({
      access_token: input.access_token
    })
  }
  
  async getJsSdkConfig(input){
      let infos = this.jsSdk.getJSSignature({
        url: input.url,
        jsTicket: input.ticket
      })
      return this.$api.success({
        appId: this.appId,
        signature: infos.signature,
        noncestr: infos.noncestr,
        timestamp: infos.timestamp,
        jsapi_ticket: input.ticket
      })
  }
}

module.exports = AngerWechat