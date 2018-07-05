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
```
## api列表
* `angerPay.scanCodePayment` <a href="#scancodepayment">刷卡支付</a>

# scanCodePayment
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
