var ProxyMode = "auto";

var defaultProxy =
{
  rules: {
    singleProxy: {
      scheme: "socks5",
      host  : "127.0.0.1",
      port  : 7070
    }
  }
}
var fallbackProxy = {};

// won't work, webRequest API is not ready yet
function AutoProxy(reqst)
{
  var proxyConfig = shouldProxy(reqst.url) ? defaultProxy : fallbackProxy;

  chrome.experimental.proxy.useCustomProxySettings(proxyConfig);
}

function shouldProxy(url)
{
  if ( url.indexOf("twitter.com") > 0 ) return true;
  return false;
}



// test...
chrome.experimental.webRequest.onBeforeRequest.addListener(
  function(reqst) {
    alert("Great! The long-awaited webRequest API finally ships!");
  }
);

// workaround...
chrome.experimental.proxy.useCustomProxySettings(
  {
    autoDetect: false,
    pacScript: {
      url: "http://autoproxy2pac.appspot.com/pac/ssh-d"
    }
  }
);
