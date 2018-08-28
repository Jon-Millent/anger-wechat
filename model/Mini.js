
// 适用于小程序的api

class Mini {
  
  constructor($api, config){
    this.$api = $api
    this.appId = config.appId
    this.authUrl = config.authUrl
    
    this.config = config
  }

  // 根据code换取 openid等
  async getOpenidByCode(input){
    return await this.$api.mini_getOpenidByCode({
      appId: this.config.appId,
      secret: this.config.appSecret,
      js_code: input.code
    })
  }

}



module.exports = Mini