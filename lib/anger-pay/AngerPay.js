const Payment = require('../wechat-pay').Payment;
const middleware = require('../wechat-pay').middleware;

class AngerPay{
  constructor(config){
    this.initConfig = {
      appId: config.appId,
      mchId: config.mchId,
      partnerKey: config.partnerKey,
      pfx: config.pfx && require('fs').readFileSync(config.payment.pfx),
      notifyUrl: config.notifyUrl
    }
    
    this.payment = new Payment(this.initConfig)
    this.middleware = middleware(this.initConfig)
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
  
  
  // 查询订单状态
  orderQuery(config){
    return new Promise(resolve => {
      this.payment.orderQuery(config, (err, result) => {
        resolve({
          result: result,
          error: err
        })
      })
    })
  }
  
  // 付钱
  brandPay(config){
    return new Promise(resolve => {
      this.payment.getBrandWCPayRequestParams(config, (err, result) => {
        resolve({
          result: result,
          error: err
        })
      })
    })
  }
  
  
  
  // 退款
  refund(config){
    return new Promise(resolve => {
      this.payment.refund(config, (err, result) => {
        resolve({
          result: result,
          error: err
        })
      })
    })
  }
  
  // 发红包
  sendRedPacket(config){
    return new Promise(resolve => {
      this.payment.sendRedPacket(config, (err, result) => {
        resolve({
          result: result,
          error: err
        })
      })
    })
  }
  
  
  // 查询红包状态
  redPacketQuery(config){
    return new Promise(resolve => {
      this.payment.redPacketQuery(config, (err, result) => {
        resolve({
          result: result,
          error: err
        })
      })
    })
  }
  
  
  
  
  // 企业付款
  transfers(config){
    return new Promise(resolve => {
      this.payment.transfers(config, (err, result) => {
        resolve({
          result: result,
          error: err
        })
      })
    })
  }
  
  
  // 查询历史订单
  downloadBill(config){
    return new Promise(resolve => {
      this.payment.downloadBill(config, (err, result) => {
        resolve({
          result: result,
          error: err
        })
      })
    })
  }
}


module.exports = AngerPay