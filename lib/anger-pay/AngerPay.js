const Payment = require('../wechat-pay').Payment;


class AngerPay{
  constructor(config){
    this.payment = new Payment({
      appId: config.appId,
      mchId: config.mchId,
      partnerKey: config.partnerKey,
      pfx: config.pfx && require('fs').readFileSync(config.payment.pfx),
      notifyUrl: config.notifyUrl
    });
  }
  
  // 刷卡支付
  scanCodePayment(config){
    return new Promise(resolve=>{
      this.payment.scanCodePayment(config, (err, result) => {
        resolve({
          result: result,
          error: err
        })
      })
    })
  }
  
}


module.exports = AngerPay