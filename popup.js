var storage = chrome.storage.local;
  
storage.get('ip', function(items) {
  console.log(items);

  document.getElementById("content").innerHTML = "<iframe name='inlineframe' src='http://" + items.ip + "/status_header.html' frameborder='0' scrolling='auto' width='500' height='180' marginwidth='5' marginheight='5' ></iframe>";
  console.log("Loaded");
  
});