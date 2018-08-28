let request = require('request')
let wechatConfig = require('../wechat')
let util = require('./tool')

class PostMan {

  constructor(config){
    this.appId = config.appId
    this.appSecret = config.appSecret
  }
  
  success(data){
    return {
      code: 200,
      msg: 'ok',
      data: data
    }
  }
  
  error(error){
    return {
      code: 200,
      msg: 'ok',
      data: {},
      error: error
    }
  }
  
  send(config){
  
    return new Promise(resolve => {
      request({
        method: (config.method || 'get').toUpperCase(),
        url: util.concatUrlAndData(config.url, config.data),
      }, (error, response, body)=> {
        if (!error && response.statusCode == 200) {
          resolve(this.success(JSON.parse(body)))
        }else{
          resolve(this.error(error))
        }
      })
      
    })
  
  }
  
  async getGlobalAccessToken(){
    let targetApi = wechatConfig.weixinApi.api.accessToken
    return await this.send({
      method: targetApi.method,
      url: targetApi.url,
      data: {
        grant_type: 'client_credential',
        appid: this.appId,
        secret: this.appSecret
      }
    })
  }

  async getAuthAccessTokenByCode(input){
    let targetApi = wechatConfig.weixinApi.web.accessToken
    return await this.send({
      method: targetApi.method,
      url: targetApi.url,
      data: {
        grant_type: 'authorization_code',
        appid: this.appId,
        secret: this.appSecret,
        code: input.code
      }
    })
  }
  
  async getUserInfo(input){
    let targetApi = wechatConfig.weixinApi.web.userInfo
    return await this.send({
      method: targetApi.method,
      url: targetApi.url,
      data: {
        lang: input.lang || 'zh_CN ',
        access_token: input.access_token,
        openid: input.openid
      }
    })
  }
  
  async getJsTicket(input){
    let targetApi = wechatConfig.weixinApi.api.jsTicket
    return await this.send({
      method: targetApi.method,
      url: targetApi.url,
      data: {
        access_token: input.access_token,
        type: 'jsapi'
      }
    })
  }
  
  
  async mini_getOpenidByCode(input){
    
    let targetApi = wechatConfig.weixinApi.mini.getOpenidByCode
    return await this.send({
      method: targetApi.method,
      url: targetApi.url,
      data: {
        appid: input.appId,
        secret: input.secret,
        js_code: input.js_code,
        grant_type: 'authorization_code'
      }
    })
  }
  
}

module.exports = PostMan