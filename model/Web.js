const $util = require('../util')
// 适用于网页的api

class Web {
  
  constructor($api, jsSdk, config){
    this.$api = $api
    this.appId = config.appId
    this.authUrl = config.authUrl
    this.jsSdk = jsSdk
    this.$util = $util
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
  
  // 获取回调auth页面的url
  getAuthUrl(input){
    return this.$util.tool.concatUrlAndData(this.authUrl, {
      appid: this.appId,
      redirect_uri: input.redirect_uri,
      scope: input.scope || 'snsapi_base',
      state: 'STATE'
    })
  }
  
  async getJsTicket(input){
    return await this.$api.getJsTicket({
      access_token: input.access_token
    })
  }
  
}



module.exports = Web