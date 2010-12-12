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

var fallbackProxy =
{
  rules: {
    singleProxy: {
      scheme: "http",
      host  : "127.0.0.1",
      port  : 8000
    }
  }
}

function AutoProxy(request)
{
  // One of the must have API for us is still under working by upstream currently.
  // http://code.google.com/p/chromium/issues/detail?id=50943
  alert("Great! The long-awaited webRequest API finally ships!");

  var proxyConfig = shouldProxy(request.url) ? defaultProxy : fallbackProxy;

  // The Proxy API has already been ready!
  chrome.experimental.proxy.useCustomProxySettings(proxyConfig);
}

function shouldProxy(url)
{
  if ( url.indexOf("twitter.com") > 0 ) return true;
  return false;
}

chrome.experimental.webRequest.onBeforeRequest.addListener(AutoProxy);
