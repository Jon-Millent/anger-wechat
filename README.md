<p align="center">
  <img src="https://user-gold-cdn.xitu.io/2018/8/28/1657e6bbde0afb3a?w=374&h=249&f=png&s=16312">
</p>

<p align="center">
  
  <a>
    <img src="https://img.shields.io/npm/dt/anger-wechat.svg">
  </a>
  <a>
    <img src="https://img.shields.io/github/package-json/v/jon-millent/anger-wechat.svg">
  </a>
  <a>
    <img src="https://badges.frapsoft.com/os/mit/mit.svg?v=103">
  </a>
  <a>
    <img src="https://img.shields.io/github/package-json/v/jon-millent/faker.svg">
  </a>
  <a>
    <img src="https://badges.frapsoft.com/os/v3/open-source.svg?v=103">
  </a>
  
</p>

<h1 align="center">
anger-wechat 
</h1>

<h4 align="center">
封装微信常用api
</h4>


## Directory
* `Global` 全局方法
  * <a href="#iswechat">isWechat `判断是否是微信环境`</a>
  * <a href="#getglobalaccesstoken">getGlobalAccessToken `获取 access_token`</a>
* `Web` 适用于网页公众号开发
  * <a href="#getjsticket">getJsTicket `获取 js api_ticket`</a>
  * <a href="#getauthurl">getAuthUrl `获取 Auth地址`</a>
  * <a href="#getauthaccesstokenbycode">getAuthAccessTokenByCode `根据code获取 openid`</a>
  * <a href="#getuserinfo">getUserInfo `获取用户信息`</a>
  * <a href="#getjssdkconfig">getJsSdkConfig `获取js sdk config配置`</a>
* `Mini` 适用于小程序开发
  * <a href="#getopenidbycode">getOpenidByCode `根据code换取 openid等`</a>
  
* `angerPay` 适用于支付 
  * <a href="https://github.com/Jon-Millent/anger-wechat/blob/master/pay.MD">`支付文档`</a>

# Getting started
`npm install anger-wechat --save`

# Use
```javascript
var AngerWechat = require('anger-wechat')
var weixinApi = new AngerWechat({
    appId: '[your appId]', // appId 必传
    appSecret: '[your appSecret]', // appSecret 必传
    authUrl: 'http://www.test.cc/get-weixin-code.html'
})
```

> 如果需要支付的话

```javascript
var AngerWechat = require('anger-wechat')
var weixinApi = new AngerWechat({
    appId: '[your appId]', // appId 必传
    appSecret: '[your appSecret]', // appSecret 必传
    authUrl: 'http://www.test.cc/get-weixin-code.html', // 可选 微信auth2.0授权公共页面
    payment: { // 可选 如果需要支付模块的话
        mchId: '123456',
        partnerKey: '456789',
        pfx: path.join(__dirname, 'apiclient_cert.p12'), //【可选】证书路径，不传大多接口掉不了
        notifyUrl: '' // 【可选】微信支付接受到结果'
    }
})
```


# Global
## `getGlobalAccessToken`    
> 全局使用，建议保存在数据库  

获取 access_token <a href="https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140183">戳我查看官方文档</a>
> access_token是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用access_token。开发者需要进行妥善保存。access_token的存储至少要保留512个字符空间。access_token的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的access_token失效。


```js
let access_token = await weixinApi.getGlobalAccessToken()
```

```json
{ 
	"code": 200,
	"msg": "请求成功",
	"data": { 
		"access_token": "11_oTBrYVsT9wqa_-q3WDNEBOtfz1XKdM7YKIcNBEiu29Wfh5yTnlqaj5W0hMuxZ7C9FlY7CxD0RjR35V1ik1M3Nyi5QENcgFKhh0gYoBnAXEQ2oV93sVtO7IRqhh1kd9QLG8fwyA3vFRdifpJCOVLgAGAVCS",
		"expires_in": 7200 
	} 
}
```  
<br>
<br>

## `isWechat`
判断是否是微信环境
```js
let ua = request.headers["user-agent"]
let isWeixin = weixinApi.isWechat(ua) // 传入 `UserAgent` 字符串，返回 true | false
```
<br>
<br>


# Web
`[AngerWechat.Web]`

## `getJsTicket`
> 全局使用，建议保存在数据库  

获取 js api_ticket  <a href="https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115">戳我查看官方文档</a>
> api_ticket 是用于调用微信卡券JS API的临时票据，有效期为7200 秒，通过access_token 来获取。
```js
let jsTrickt = await weixinApi.Web.getJsTicket({
    access_token: '11_oTBrYVsT9wqa_-q3WDNEBOtfz1XKdM7YKIcNBEiu29Wfh5yTnlqaj5W0hMuxZ7C9FlY7CxD0RjR35V1ik1M3Nyi5QENcgFKhh0gYoBnAXEQ2oV93sVtO7IRqhh1kd9QLG8fwyA3vFRdifpJCOVLgAGAVCS' // 以上一步获取到的access_token 获取 js api_ticket
  })
```

```json
{
	"code": 200,
	"msg": "ok",
	"data": {
		"errcode": 0,
		"errmsg": "ok",
		"ticket": "HoagFKDcsGMVCIY2vOjf9oKOmI5MRTBgKJJwCDQ2BnyLbfAJHCZXUIs992xQP246Nzp7LCNupv5Jablw8COZ_w",
		"expires_in": 7200
	}
}
```
<br>
<br>

## `getAuthUrl` 
获取 Auth地址,重定向之后用来获取code
```js
let authURl = weixinApi.Web.getAuthUrl({
	redirect_uri: 'http://www.baidu.com',
	scope: 'snsapi_userinfo' // snsapi_base:静默授权，snsapi_userinfo:提示授权（可以后续获取用户信息）
})
console.log(authURl)
// http://www.toolos.cc/get-weixin-code.html?appid=wxf638c1f64239e786&redirect_uri=http://www.baidu.com&scope=snsapi_userinfo&state=STATE
```
<br>
<br>

## `getAuthAccessTokenByCode`   
根据code获取 openid 
```js
let codeInfo = await weixinApi.Web.getAuthAccessTokenByCode({
    code: '061729xv1BtSAa09g8yv1hr0xv1729xB'
})
```
```json
{
	"code": 200,
	"msg": "请求成功",
	"data": {
		"access_token": "11_Vc7D8AoYURWoECzJgD6Q1ccUOOHypO6mU0RQF7BnliKKCY5arfVvl0h3PWURwpK7QFgPLfDkHLX-9Dif6BTntw",
		"expires_in": 7200,
		"refresh_token": "11_ii3uONcMPA-04RjuLlckMMiwaDGF2MjW2SB5vOI3Sshz39PAVn7kOyC80_pPmmRJxqbfJ3Rdw07WG154AeP83Q",
		"openid": "oI-Aa04T6FrpFFpTfyAaXR4SKacU",
		"scope": "snsapi_userinfo"
	}
}
```
<br>
<br>

## `getUserInfo`
根据 `getAuthAccessTokenByCode` 获取的 `access_token` 和 `openid` 获取用户信息，注意这里的获取回调url方法 `getAuthUrl` 的 `scope` 需要传 `snsapi_userinfo`
```js
let userInfo = await weixinApi.Web.getUserInfo({
	access_token: codeInfo.data.access_token,
	openid: codeInfo.data.openid
})
```
```json
{
	"code": 200,
	"msg": "请求成功",
	"data": {
		"openid": "oI-Aa04T6FrpFFpTfyAaXR4SKacU",
		"nickname": "吃鱼的帆",
		"sex": 1,
		"language": "zh_CN",
		"city": "**",
		"province": "**",
		"country": "中国",
		"headimgurl": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIS3x9dFdptD1s2ZZMTDCriaiaXiaDPtyZw3vfMmJLyQ8PU8laBv4MNnJh5c9QWtTQey0m4FYUPVEvAQ/132",
		"privilege": []
	}
}
```

<br>
<br>

## `getJsSdkConfig`
获取js sdk config配置 <a href="https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign">微信 JS 接口签名校验工具</a>
```js
let jsTricktConfig = await weixinApi.Web.getJsSdkConfig({
	ticket: 'HoagFKDcsGMVCIY2vOjf9oKOmI5MRTBgKJJwCDQ2Bnx34ua3MVs9zUZpV0wQPe8h83AwFSZQREHGgmuKpqvdsg',
	url: 'http://www.toolos.cc' // 调用js sdk 页面地址
})
```

```json
{
	"appId": "wxf638c1f64239e786",
	"signature": "2c18eb8d6adaa5e02a9df517e776f5eef40ed402",
	"noncestr": "04b21a6a-caea-4878-9fdb-8b2c1ff699b0",
	"timestamp": 1530636997,
	"jsapi_ticket": "HoagFKDcsGMVCIY2vOjf9oKOmI5MRTBgKJJwCDQ2Bnx34ua3MVs9zUZpV0wQPe8h83AwFSZQREHGgmuKpqvdsg"
}
```
<br>
<br>  

# Mini
`[AngerWechat.Mini]`  

## `getOpenidByCode`
根据小程序传来的code获取openid等信息 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/api-login.html#wxloginobject">临时登录凭证code 获取 session_key 和 openid 等。</a>
```js
let info = await weixinApi.Mini.getOpenidByCode({
    code: 'xxxxxxxxxxxxxx'
})
```

```json
{
    "openid" : "oynY34-0Err_YssQIFsK-Ht1eGs",
    "session_key" : "sPxOFsssssCP54n6cCfshw=="
}
```
<br>
<br>  



# 支付
<a href="https://github.com/Jon-Millent/anger-wechat/blob/master/pay.MD">戳我查看文档地址</a>

# 附录

## 关于 authUrl 参数
参考 <a href="https://github.com/Jon-Millent/GetWeixinCode">GetWeixinCode</a>

## 校验工具

* <a href="https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign">微信 JS 接口签名校验工具</a>
* <a href="https://mp.weixin.qq.com/debug/">微信公众平台接口调试工具</a>

## 请我喝杯咖啡，支持更多开源
![1024.png](https://user-gold-cdn.xitu.io/2018/8/28/1657e4024cf809c5?w=1024&h=600&f=png&s=98655)

