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

## 获取 access_token 
- access_token是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用access_token。开发者需要进行妥善保存。access_token的存储至少要保留512个字符空间。access_token的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的access_token失效。
