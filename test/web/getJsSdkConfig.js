let angerWechat = require('./initwx')


async function index() {
  
  

  let jsTricktConfig = await angerWechat.Web.getJsSdkConfig({
    ticket: 'HoagFKDcsGMVCIY2vOjf9oKOmI5MRTBgKJJwCDQ2Bnznetv1RDCf7IumwfXAID09Fl1iShxNaxpEha2vUmJ8Kg',
    url: 'http://www.toolos.cc'
  })
  
  console.log(jsTricktConfig)
  
  /*
  { code: 200,
  msg: 'ok',
  data:
   { appId: 'wxf638c1f64239e786',
     signature: '64ef0d56b626f1d1158891d4282871beeb05c853',
     noncestr: 'e2fc45bd-590e-41d2-a488-81d1757adcc8',
     timestamp: 1535418729,
     jsapi_ticket: 'HoagFKDcsGMVCIY2vOjf9oKOmI5MRTBgKJJwCDQ2Bnznetv1RDCf7IumwfXAID09Fl1iShxNaxpEha2vUmJ8Kg' } }
  */
}


index()