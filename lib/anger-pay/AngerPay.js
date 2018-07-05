const Payment = require('../wechat-pay').Payment;


class AngerPay{
  constructor(config){
    this.payment = new Payment({
      appId: config.appId,
      mchId: config.payment.mchId,
      partnerKey: config.payment.partnerKey,
      pfx: require('fs').readFileSync(config.payment.pfx),
      notify_url: config.payment.notify_url,
      spbill_create_ip: config.payment.spbill_create_ip
    });
  }
  
  // 刷卡支付
  scanCodePayment(config){
    return new Promise(resolve=>{
      this.payment.scanCodePayment(config, (err, result) => {
        resolve(err, result)
      })
    })
  }
  
}