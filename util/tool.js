let lodash = require('lodash')

function objToUrlString(obj){
  let str = '?'
  for(var i in obj){
    str += (i + '=' + obj[i] + '&')
  }
  return str.substr(0, str.length-1)
}

function concatUrlAndData(url, data){
  var target = urlToObject(url)
  return target.url + objToUrlString(lodash.assign(target.data, data))
}

function urlToObject(url){
  var obj = {}
  if(url.indexOf('#') != -1){
    url = url.split('#')[0]
  }
  if(url.indexOf('?') != -1){
    try{
      var dataStr = url.split('?')
      url = dataStr[0]
      var infoStr = dataStr[1].split('&')
      for(var i=0; i<infoStr.length; i++){
        var nowTar = infoStr[i].split('=')
        obj[nowTar[0]] = nowTar[1]
      }
    }catch (e) {
    
    }
  }
  return {
    data: obj,
    url: url
  }
}

module.exports = {
  objToUrlString: objToUrlString,
  urlToObject: urlToObject,
  concatUrlAndData: concatUrlAndData
}