var Core = chrome.extension.getBackgroundPage();

emphasizeEnabledMode();
document.addEventListener("click", switchMode, false);

function emphasizeEnabledMode()
{
  var buttons = document.getElementsByTagName("button");
  for (var i=0; i<buttons.length; i++)
    buttons[i].style.fontWeight = buttons[i].value == Core.ProxyMode ? "bold" : "normal";
}

function switchMode(event)
{
  var newMode = event.target.value;
  if (newMode) {
    Core.ProxyMode = newMode;
    emphasizeEnabledMode();
  }
}

