// hashkey 
var hashkey = "asp_hash";

// 特定のGETキーを持っていたらcookieに追加
var wowInit = function(){
  var hash = getFromGetParam(hashkey);
  if( hash ){
    //getキーに入っていたら
    setToCookie( hashkey, hash );
    window.localStorage.setItem(hashkey, hash);
  }else{
    //入っていない場合
    hash = getFromCookie(hashkey);
    if( hash ){
      //クッキーに入っているならlsにセット
      window.localStorage.setItem(hashkey, hash);
    }else{
      //入っていなければlsから取得
      hash = window.localStorage.getItem(hashkey);
      if( hash ){
        setToCookie( hashkey, hash );
      }
    }
  }
  console.log("wow:"+hash);
}
window.wowInit = wowInit;

// CV発生時
var wowCV = function(clinet_hash, client_key, params){

  var program_hash = getFromCookie(hashkey);
  if( program_hash == null ){
    program_hash = window.localStorage.getItem(hashkey);
  }
  console.log("wow:"+program_hash);

  var url = "https://ad.perks.co.jp/api/webhook/conversion";
  var sendParam = {
    asp_hash: program_hash,
    hash: clinet_hash,
    key: client_key,
    data: params
  };
  acccessByAjax(url, "POST", sendParam, function(data){
    console.log(data);
  }, function(error){
  }, {});
}
window.wowCV = wowCV;


// GETパラメータの取得
var getFromGetParam = function(key) {
  var query = document.location.search.substring(1);

  var parameters = query.split('&');  
  for (var i = 0; i < parameters.length; i++) {
    // パラメータ名とパラメータ値に分割する
    var element = parameters[i].split('=');
    var paramName = decodeURIComponent(element[0]);
    var paramValue = decodeURIComponent(element[1]);
    if( paramName == key ){
      return paramValue;
    }
  }
  return null;
}

// Cookieからの取得
var getFromCookie = function(key) {
  var ret = null;
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var element = cookies[i].split('=');
    var paramName = decodeURIComponent(element[0]);
    var paramValue = decodeURIComponent(element[1]);
    if( paramName.trim() == key ){
      ret = paramValue;
    }
  }
  return ret;
}

// Cookieからの取得
var setToCookie = function(key, value){
  
  var domains = document.location.hostname.split(".");
  var num = 2;
  if( domains[ domains.length -1 ] == "jp" && domains[ domains.length -2 ].length == 2 ){
    num = 3;
  }
  var domainStr = domains.map( function( domain, index ) {
    if( (num + index) >= domains.length ){
      return "."+domain;
    }else{
      return "";
    }
  }).join("");

  if( domainStr == ".localhost" ){
    domainStr = "localhost";
  }

  var cookie = key+"="+value+";";
  cookie += "max-age=31536000;";
  cookie += "domain="+domainStr+";";
  cookie += "path=/;";
  document.cookie = cookie;

  // サブドメイン横断ｋ

  var param = {};
  param[key] = value;
  param["protocol"] = window.location.protocol;
  param["domain"] = "wow."+window.location.hostname;
  param["base_domain"] = window.location.hostname;
  param["port"] = window.location.port;

  var url = param["protocol"]+"//"+param["domain"]+":"+param["port"]+"/api/webhook/set_cookie";
  acccessByAjax(url, "POST", param, function(result) {
    console.log(result);
  }, null, {});
}


// ajaxでの送信
var acccessByAjax = function(url, method, param, success, error, header){
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  xhr.setRequestHeader('content-type', 'application/json;charset=UTF-8');
  
  var keys = Object.keys(header);
  for( var i=0; i < keys.length; i ++ ){
    var key = keys[i];
    xhr.setRequestHeader(key, header[key]);
  }

  xhr.onload = function() {
    try {
      var data = JSON.parse(xhr.responseText);
      if( success!=null ){
        success(data);
      }
    }catch (e) {}
  };
  xhr.onerror = function(){
    console.log(xhr);
    if( error!=null ){
      error(xhr);
    }
  };
  xhr.withCredentials = true;
  xhr.send( JSON.stringify(param) );
}