# 微信支付文档
## 配置
```js
var AngerWechat = require('anger-wechat')
var weixinApi = new AngerWechat({
    appId: 'wxf638c1f64239e786', // appId
    appSecret: 'e10c0db08562640e0a9fffab940724c2', // appSecret
    authUrl: 'http://www.toolos.cc/get-weixin-code.html', // 微信auth2.0授权公共页面
    payment: { // 可选 如果需要支付模块的话
        mchId: '123456',
        partnerKey: '456789',
        pfx: path.join(__dirname, 'apiclient_cert.p12'), //【可选】证书路径，不传大多接口掉不了
        notifyUrl: '' // 【可选】微信支付接受到结果
    }
})

// 支付挂载在 weixinApi.angerPay ...
```
## api列表
* `angerPay.scanCodePayment` <a href="#scancodepayment">刷卡支付</a>

### scanCodePayment
刷卡支付 <a href="https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_10&index=1">官方文档地址</a>  

![刷卡支付](https://pay.weixin.qq.com/wiki/doc/api/img/chapter5_1_0.jpg)

```js
let callback = await weixinApi.angerPay.scanCodePayment({
    body: '商品描述',//【必传】商品描述
    out_trade_no: 'lol1217752501201407033233368020', //【必传】商户订单号
    total_fee: 1, //【必传】收款价格，单位（分）
    spbill_create_ip: '127.0.0.1',//【必传】终端IP
    auth_code: '100087493850578200',//【必传】付款码
    device_info: '',//【选传】设备号
    sign_type: '',//【选传】签名类型
    detail: '',//【选传】商品详情
    attach: '',//【选传】附加数据
    fee_type: '',//【选传】货币类型
    goods_tag: '',//【选传】订单优惠标记
    limit_pay: '',//【选传】指定支付方式
    time_start: '',//【选传】交易起始时间
    time_expire: '',//【选传】交易结束时间
    scene_info: '',//【选传】场景信息
})
```
<br>
<br>  

### orderQuery
查询订单 <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_2">官方文档地址</a>  
```js
let callback = await weixinApi.angerPay.orderQuery({
    out_trade_no: 'lol1217752501201407033233368020',//【必传】订单号
})
```
<br>
<br>  

* 以下方法和文档均继承自 `wechat-pay`   

### brandPay
付钱
```js
let callback = await weixinApi.angerPay.brandPay({
  body: '吮指原味鸡 * 1',
  attach: '{"部位":"三角"}',
  out_trade_no: 'kfc' + (+new Date),
  total_fee: 10 * 100,
  spbill_create_ip: req.ip,
  openid: req.user.openid,
  trade_type: 'JSAPI'
})
```  

注：
1. 页面的路径需要位于`支付授权目录`下
2. 由于每次呼出支付界面，无论用户是否支付成功，out_trade_no 都会失效（OUT_TRADE_NO_USED），所以这里使用timestamp保证每次的id不同。业务逻辑中应该自行维护之  

<br>
<br>  

前端通过

```javascript
WeixinJSBridge.invoke('getBrandWCPayRequest', payargs, function(res){
  if(res.err_msg == "get_brand_wcpay_request:ok"){
    alert("支付成功");
    // 这里可以跳转到订单完成页面向用户展示
  }else{
    alert("支付失败，请重试");
  }
});
```
来呼出微信的支付界面

### 接收微信付款确认请求  

```javascript

app.use('<notifyUrl>', weixinApi.angerPay.middleware(initConfig).getNotify().done(function(message, req, res, next) {
  var openid = message.openid;
  var order_id = message.out_trade_no;
  var attach = {};
  try{
   attach = JSON.parse(message.attach);
  }catch(e){}

  /**
   * 查询订单，在自己系统里把订单标为已处理
   * 如果订单之前已经处理过了直接返回成功
   */
  res.reply('success');

  /**
   * 有错误返回错误，不然微信会在一段时间里以一定频次请求你
   * res.reply(new Error('...'))
   */
}));
```
<br>
<br>

### brandPay
付钱
```js
let callback = await weixinApi.angerPay.refund({
  out_trade_no: "kfc001",
  out_refund_no: 'kfc001_refund',
  total_fee: 10 * 100,
  refund_fee: 10 * 100
})
```

<br>
<br>

### 接收退款确认请求

```javascript

app.use('<notifyUrl>', weixinApi.angerPay.middleware(initConfig).getRefundNotify().done(function(message, req, res, next) {
  var openid = message.openid;
  var refund_order_id = message.out_refund_no;
  var order_id = message.out_trade_no;
  var attach = {};
  try{
   attach = JSON.parse(message.attach);
  }catch(e){}

  /**
   * 查询订单，在自己系统里把订单标为已处理
   * 如果订单之前已经处理过了直接返回成功
   */
  res.reply('success');

  /**
   * 有错误返回错误，不然微信会在一段时间里以一定频次请求你
   * res.reply(new Error('...'))
   */
}));
```

<br>
<br>

### sendRedPacket
发红包
```js
let callback = await weixinApi.angerPay.sendRedPacket({
  mch_billno: 'kfc002',
  send_name: '肯德基',
  re_openid: '',
  total_amount: 10 * 100,
  total_num: 1,
  wishing: '祝多多吃鸡',
  client_ip: '',
  act_name: '吃鸡大奖赛',
  remark: '记得吐骨头',
  scene_id: 'PRODUCT_1'
})
```
<br>
<br>
### redPacketQuery
查询红包状态
```js
let callback = await weixinApi.angerPay.redPacketQuery({
  mch_billno: 'kfc002'
})
```
<br>
<br>

### transfers
企业付款
```js
let callback = await weixinApi.angerPay.transfers({
  partner_trade_no: 'kfc003',
  openid: '',
  check_name: 'NO_CHECK',
  amount: 10 * 100,
  desc: '',
  spbill_create_ip: ''
})
```
根据微信文档，当返回错误码为“SYSTEMERROR”时，一定要使用原单号重试，否则可能造成重复支付等资金风险。
<br>
<br>
### downloadBill
查询历史订单
```js
let callback = await weixinApi.angerPay.downloadBill({
  bill_date: "20140913",
  bill_type: "ALL"
})
```
<br>
<br>



