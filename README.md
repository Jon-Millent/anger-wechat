# anger-wechat
![未标题-1.jpg](https://i.loli.net/2018/07/03/5b3b089da8d52.jpg)


## 万恶之源-如何开始
`npm install anger-wechat --save`

```javascript
var AngerWechat = require('anger-wechat')
var weixinApi = new AngerWechat({
    appId: 'wxf638c1f64239e786', // appId
    appSecret: 'e10c0db08562640e0a9fffab940724c2', // appSecret
    authUrl: 'http://www.toolos.cc/get-weixin-code.html', // 微信auth2.0授权公共页面
    payment: { // 可选 如果需要支付模块的话
        mchId: '123456',
        partnerKey: '456789',
        pfx: path.join(__dirname, 'apiclient_cert.p12'),
        notify_url: '',
        spbill_create_ip: ''
    }
})
```
