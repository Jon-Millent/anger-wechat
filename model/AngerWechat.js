const $util = require('../util')
const AngerPay = require('../lib/anger-pay')
const Web = require('./Web')
const Mini = require('./Mini')

class AngerWechat{
  
  constructor(config){
    this.appId = config.appId
    this.appSecret = config.appSecret
    this.authUrl = config.authUrl
    
    this.config = config
    
    this.jsSdk = new $util.GetJsSdk()
    this.$api = new $util.PostMan({
      appId: this.appId,
      appSecret: this.appSecret
    })

    if(config.payment){
      this.angerPay = new AngerPay({
        partnerKey: config.payment.partnerKey,
        appId: config.appId,
        mchId: config.payment.mchId,
        notifyUrl: config.payment.notifyUrl,
        pfx: config.payment.pfx
      })
    }
    
    this.Web = new Web(this.$api, this.jsSdk, config)
    this.Mini = new Mini(this.$api, config)
  }
  
  // 是否是微信环境
  isWechat(UserAgent){
    let ua = UserAgent.toLowerCase();
    return ua.match(/MicroMessenger/i)=="micromessenger";
    //如果是微信浏览器返回true 否则返回false
  }
  
  // 获取API ACCESS_TOKEN
  async getGlobalAccessToken(){
    return await this.$api.getGlobalAccessToken()
  }
  
  
  
  
}

module.exports = AngerWechat