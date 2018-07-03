var AngerWechat = require('../index')
var path = require('path')

var weixinApi = new AngerWechat({
    appId: 'wxf638c1f64239e786',
    appSecret: 'e10c0db08562640e0a9fffab940724c2',
    authUrl: 'http://www.toolos.cc/get-weixin-code.html',
    payment: {
        mchId: '123456',
        partnerKey: '456789',
        pfx: path.join(__dirname, 'apiclient_cert.p12'),
        notify_url: '',
        spbill_create_ip: ''
    }
})

weixinApi.payment.sendRedPacket({
    total_num: 1,
    mch_billno: '1000000',
    send_name: '测试标题',
    re_openid: 'asdasdasdasdasdasdasdasdasd',
    total_amount: 100,
    wishing: '恭喜发财，大吉大利',
    act_name: '扫码领红包',
    remark: '备注信息',
    client_ip: '127.0.0.1',
    scene_id: 'PRODUCT_2'
}, (err, result) => {
    console.log(err, result)
});