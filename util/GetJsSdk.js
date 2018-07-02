const uuid = require('node-uuid');
const crypto = require('crypto');

class GetJsSdk{
  
  gettimestamp(){
    var timestamp = Date.parse(new Date());
    return timestamp/1000;
  }
  
  getnoncestr(){
    return uuid.v4();
  }
  getJSSignature(input){
    let noncestr = this.getnoncestr();
    let timestamp = this.gettimestamp();
    let jsapi_ticket = input.jsTicket
    let str = 'jsapi_ticket='+jsapi_ticket+'&noncestr='+noncestr+'&timestamp='+timestamp+'&url='+(input.url)
    
    var crypto_obj = crypto.createHash('sha1');
    crypto_obj.update(str);
    let signature = crypto_obj.digest('hex');
    return {
      signature,
      noncestr,
      timestamp
    }
  }
}


module.exports = GetJsSdk